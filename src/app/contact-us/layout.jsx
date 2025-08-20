import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/contact-us");
}

export default function ContactUsLayout({ children }) {
  return children;
}
