import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/aicte-spices");
}

export default function AicteSpicesLayout({ children }) {
  return children;
}
