import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/location");
}

export default function LocationLayout({ children }) {
  return children;
}
