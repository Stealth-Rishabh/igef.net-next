import { buildMetadataForPath } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadataForPath("/why-indo-global/infrastructure");
}

export default function InfrastructureLayout({ children }) {
  return children;
}
