import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/online-grievance");
}

export default function OnlineGrievanceLayout({ children }) {
  return children;
}
