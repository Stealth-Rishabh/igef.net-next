import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/spotlights");
}

export default function SpotlightsLayout({ children }) {
  return children;
}
