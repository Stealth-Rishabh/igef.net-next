import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/accreditation");
}

export default function AccreditationLayout({ children }) {
  return children;
}
