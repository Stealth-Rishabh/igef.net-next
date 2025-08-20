import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/placements/campus-recruitments");
}

export default function CampusRecruitmentsLayout({ children }) {
  return children;
}
