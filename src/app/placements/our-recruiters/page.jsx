"use client";
import Heading from "@/components/Heading";
import ImgAndBreadcrumb from "@/components/ImgAndBreadcrumb";
import Container from "@/components/wrappers/Container";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import AboutSidebar from "@/components/AboutSidebar";

import IconMarquee from "../IconMarquee";

const icons = [
  // { src: ashoklayland, alt: "Ashok Leyland" }  ,
  { src: "/assets/about/tieUps/cisco.png", alt: "Cisco" },
  // { src: ibm, alt: "IBM" },
  // { src: IETE, alt: "IETE" },
  // { src: IIT_BOMBAY, alt: "IIT Bombay" },
  // { src: IIT_Kanpur, alt: "IIT Kanpur" },
  // { src: ISTE_logo, alt: "ISTE" },
  { src: "/assets/about/tieUps/oracle.png", alt: "Oracle" },
  { src: "/assets/about/tieUps/redhat_logo.png", alt: "Red Hat" },
  { src: "/assets/about/tieUps/Roundglass.png", alt: "Roundglass" },
  // { src: toyota, alt: "Toyota" },
  {
    src: "/assets/about/tieUps/university_of_quebec.png",
    alt: "University of Quebec",
  },
  { src: "/assets/placements/recruiters/ibm.jpg", alt: "IBM" },
  { src: "/assets/placements/recruiters/Ashok.png", alt: "Ashok Leyland" },
  { src: "/assets/placements/recruiters/Lt.png", alt: "L&T" },
  { src: "/assets/placements/recruiters/Wipro.png", alt: "Wipro" },
  { src: "/assets/placements/recruiters/Simplex.jpg", alt: "Simplex" },
];

const sidebarLinks = [
  { href: "/placements/campus-recruitments", label: "Campus Recruitments" },
  { href: "/placements/industry-speaks", label: "Industry Speaks" },
  { href: "/placements/industry-tie-ups", label: "Industry Tie-ups" },
  { href: "/placements/placement-activities", label: "Placement Activities" },
  { href: "/placements/our-recruiters", label: "Our Recruiters" },
];
const OurRecruiters = ({ h1 }) => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/placements/our-recruiters", label: "Placements" },
    { label: "Our Recruiters" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Our Recruiters"
        imageSrc="/assets/BannerPlacements.webp"
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className=" grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:sticky md:top-5 self-start">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 sm:pt-12">
          <Heading
            title={h1}
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="Top companies across various industries now choose Indo Global Colleges as a preferred destination for on-campus recruitment. This success is driven by the dedicated efforts of the Placement Centre's team, who equip students with the skills and guidance needed to secure ideal placements and excel in their careers."
            className="lg:pb-10"
          />
          <IconMarquee icons={icons} />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default OurRecruiters;
