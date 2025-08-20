import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/leadership");
}

export default function LeadershipLayout({ children }) {
  return children;
}
