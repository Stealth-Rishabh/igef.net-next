import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/gallery");
}

export default function GalleryLayout({ children }) {
  return children;
}
