import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/sports-arena");
}

export default function SportsArenaLayout({ children }) {
  return children;
}
