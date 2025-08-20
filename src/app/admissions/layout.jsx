import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/admissions");
}

export default function AdmissionsLayout({ children }) {
  return children;
}
