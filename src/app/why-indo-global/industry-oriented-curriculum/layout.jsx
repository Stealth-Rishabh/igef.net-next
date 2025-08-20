import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/industry-oriented-curriculum");
}

export default function IndustryOrientedCurriculumLayout({ children }) {
  return children;
}
