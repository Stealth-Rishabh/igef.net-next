import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/placements/industry-speaks");
}

export default function IndustrySpeaksLayout({ children }) {
  return children;
}
