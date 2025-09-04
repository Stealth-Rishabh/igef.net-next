import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/privacy-policy");
}

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
