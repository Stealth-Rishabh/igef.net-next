import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/placements/our-recruiters");
}

export default function OurRecruitersLayout({ children }) {
  return children;
}
