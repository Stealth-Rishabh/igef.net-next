import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/placements/placement-activities");
}

export default function PlacementActivitiesLayout({ children }) {
  return children;
}
