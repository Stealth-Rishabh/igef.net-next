import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/great-transportation");
}

export default function GreatTransportationLayout({ children }) {
  return children;
}
