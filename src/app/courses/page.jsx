import Courses from "./Courses";
import { buildMetadataForPath, getH1ForPath } from "@/lib/seo";

export const generateMetadata = () => buildMetadataForPath("/courses");

export default function CoursesPage() {
  const h1 = getH1ForPath("/courses");
  return <Courses h1={h1} />;
}
