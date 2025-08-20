import JobForm from "./JobForm";
import { getH1ForPath } from "@/lib/seo";

const Careers = ({ h1 }) => {
  return (
    <section className="p-0 sm:p-10 bg-slate-100">
      <JobForm h1={h1} />
    </section>
  );
};

export default function Page() {
  const h1 = getH1ForPath("/careers");
  return <Careers h1={h1} />;
}
