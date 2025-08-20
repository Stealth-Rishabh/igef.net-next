import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/about/vision-mission");
}

export default function VisionMissionLayout({ children }) {
  return children;
}
