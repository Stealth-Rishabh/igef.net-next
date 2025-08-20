import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/notable-alumni");
}

export default function NotableAlumniLayout({ children }) {
  return children;
}
