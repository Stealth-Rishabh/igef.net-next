import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/placements/industry-tie-ups");
}

export default function IndustryTieUpsLayout({ children }) {
  return children;
}
