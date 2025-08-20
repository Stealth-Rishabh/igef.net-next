import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/online-learning-resources");
}

export default function OnlineLearningResourcesLayout({ children }) {
  return children;
}
