import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/hostel");
}

export default function HostelLayout({ children }) {
  return children;
}
