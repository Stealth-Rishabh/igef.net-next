import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/careers");
}

export default function CareersLayout({ children }) {
  return children;
}
