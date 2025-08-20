import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/students-security");
}

export default function StudentsSecurityLayout({ children }) {
  return children;
}
