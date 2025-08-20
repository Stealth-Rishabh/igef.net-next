import { getSeoDataByPath, getCanonicalUrl } from "@/data/seoConfig";

export function buildMetadataForPath(path) {
  const seo = getSeoDataByPath(path) || {};
  const title = seo.title || "Indo Global Group of Colleges";
  const description =
    seo.description ||
    "Premier engineering education, cutting-edge architecture programs, and industry-ready training.";
  const canonical = getCanonicalUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "IGEF",
      type: "website",
    },
  };
}

export function getH1ForPath(path) {
  const seo = getSeoDataByPath(path);
  return seo?.h1 || "";
}
