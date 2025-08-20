import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/alumni-login");
}

export default function AlumniLoginLayout({ children }) {
  return children;
}
