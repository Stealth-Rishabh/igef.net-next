import { headers } from "next/headers";
import { seoConfig } from "@/data/seoConfig";

export const dynamic = "force-dynamic";

// ✅ Fetch ALL WP blog slugs using public API
async function getWpBlogSlugs() {
  let allPosts = [];
  let page = 1;
  let hasMore = true;
  const maxPages = 50; // Prevent infinite loops

  try {
    console.log("🔍 Starting WordPress blog fetch from public API...");

    while (hasMore && page <= maxPages) {
      const apiUrl = `https://www.igef.net/blog/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`;

      console.log(`🔍 Fetching WordPress posts page ${page}...`);
      console.log(`🔍 API URL: ${apiUrl}`);

      const res = await fetch(apiUrl, {
        headers: {
          "User-Agent": "IGEF-Sitemap/1.0",
        },
        cache: "no-store",
        next: { revalidate: 3600 }, // Revalidate every hour
      });

      console.log(`📡 Response status: ${res.status}`);

      if (!res.ok) {
        console.error(
          `❌ Failed to fetch WP slugs (page ${page}): ${res.status} ${res.statusText}`
        );
        break;
      }

      const posts = await res.json();
      console.log(`✅ Fetched ${posts.length} posts from page ${page}`);

      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts = [...allPosts, ...posts];
        page++;
      }
    }

    console.log(`🎯 Total WordPress posts fetched: ${allPosts.length}`);

    return allPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.modified || Date.now()),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("❌ Error fetching WordPress posts:", error.message);
    // Return empty array instead of failing completely
    return [];
  }
}

// Convert seoConfig entries to route list
function getRoutesFromSeoConfig() {
  const seen = new Set();
  const routes = [];

  // Helper function to recursively extract paths from seoConfig
  const extractPaths = (config, parentPath = "") => {
    for (const [key, value] of Object.entries(config)) {
      if (value && typeof value === "object") {
        if (value.path) {
          // This is a route with a path
          if (!seen.has(value.path)) {
            seen.add(value.path);
            routes.push({
              url: value.path,
              lastModified: new Date(),
              changeFrequency: "weekly",
              priority: value.path === "/" ? 1.0 : 0.7,
            });
          }
        } else {
          // Recursively check nested objects
          extractPaths(value, `${parentPath}${key}/`);
        }
      }
    }
  };

  extractPaths(seoConfig);

  console.log(`📊 Extracted ${routes.length} routes from seoConfig`);
  return routes;
}

export default async function sitemap() {
  // Force regeneration every time
  const timestamp = new Date().toISOString();

  try {
    const headersList = headers();
    const defaultDomain = "www.igef.net";
    const isProd = process.env.NODE_ENV === "production";
    const hostHeader = headersList.get("host");
    const domain = isProd ? defaultDomain : hostHeader || defaultDomain;
    const protocol = isProd ? "https" : "http";
    const baseUrl = `${protocol}://${domain}`;

    console.log("🚀 Generating sitemap...");
    console.log("🚀 Timestamp:", timestamp);
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Domain:", domain);
    console.log("Protocol:", protocol);

    // ✅ Load both: seoConfig routes + WP blog slugs
    const [seoRoutes, wpRoutes] = await Promise.all([
      Promise.resolve(getRoutesFromSeoConfig()),
      getWpBlogSlugs(),
    ]);

    const allRoutes = [...seoRoutes, ...wpRoutes];

    console.log(`📊 Sitemap generated successfully:`);
    console.log(`   - Static routes: ${seoRoutes.length}`);
    console.log(`   - WordPress routes: ${wpRoutes.length}`);
    console.log(`   - Total routes: ${allRoutes.length}`);

    // Debug: Show some WordPress routes if they exist
    if (wpRoutes.length > 0) {
      console.log("📝 Sample WordPress routes:");
      wpRoutes.slice(0, 3).forEach((route, index) => {
        console.log(`   ${index + 1}. ${route.url}`);
      });
    } else {
      console.log(
        "⚠️ No WordPress routes found - this indicates the API call failed"
      );
    }

    return allRoutes.map((route) => ({
      ...route,
      url: `${baseUrl}${route.url}`,
    }));
  } catch (error) {
    console.error("❌ Sitemap generation failed:", error.message);
    console.error("Error details:", error);

    // Fallback: return only static routes if everything fails
    console.log("🔄 Falling back to static routes only...");
    const fallbackRoutes = getRoutesFromSeoConfig();

    return fallbackRoutes.map((route) => ({
      ...route,
      url: `https://www.igef.net${route.url}`,
    }));
  }
}
