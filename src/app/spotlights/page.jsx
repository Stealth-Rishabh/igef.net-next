import SpotlightAndEvents from "./SpotlightAndEvents";
import { getH1ForPath } from "@/lib/seo";

export default function SpotlightsPage() {
  const h1 = getH1ForPath("/spotlights");
  return <SpotlightAndEvents h1={h1} />;
}
