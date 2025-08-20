import CoursesDetails from "../CoursesDetails";
import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const coursePath = Array.isArray(params?.coursePath)
    ? params.coursePath[0]
    : params.coursePath;
  return buildMetadataForPath(`/courses/${coursePath}`);
}

export default function CourseDetailPage({ params }) {
  return <CoursesDetails coursePath={params.coursePath} />;
}
