import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/terms-and-conditions");
}

export default function TermsAndConditionsLayout({ children }) {
  return children;
}
