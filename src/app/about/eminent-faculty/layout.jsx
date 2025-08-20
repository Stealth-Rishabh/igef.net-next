import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/eminent-faculty");
}

export default function EminentFacultyLayout({ children }) {
  return children;
}
