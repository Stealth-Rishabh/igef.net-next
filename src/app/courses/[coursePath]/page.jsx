import CoursesDetails from "../CoursesDetails";

export default function CourseDetailPage({ params }) {
  return <CoursesDetails coursePath={params.coursePath} />;
}
