import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/alumni-signup");
}

export default function AlumniSignupLayout({ children }) {
  return children;
}
