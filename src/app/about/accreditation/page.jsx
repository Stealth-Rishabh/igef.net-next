"use client";
import Heading from "@/components/Heading";
import ImgAndBreadcrumb from "@/components/ImgAndBreadcrumb";
import Container from "@/components/wrappers/Container";
// import Header from "../header/Header";
import IconMarquee from "./IconMarquee";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
//imgs
import AboutSidebar from "@/components/AboutSidebar";
import { getH1ForPath } from "@/lib/seo";

const icons = [
  { src: "/assets/about/tieUps/ashoklayland.png", alt: "Ashok Leyland" },
  { src: "/assets/about/tieUps/cisco.png", alt: "Cisco" },
  { src: "/assets/about/tieUps/ibm.png", alt: "IBM" },
  { src: "/assets/about/tieUps/IETE.png", alt: "IETE" },
  { src: "/assets/about/tieUps/IIT_BOMBAY.png", alt: "IIT Bombay" },
  { src: "/assets/about/tieUps/IIT_Kanpur.jpg", alt: "IIT Kanpur" },
  { src: "/assets/about/tieUps/ISTE_logo.png", alt: "ISTE" },
  { src: "/assets/about/tieUps/oracle.png", alt: "Oracle" },
  { src: "/assets/about/tieUps/redhat_logo.png", alt: "Red Hat" },
  { src: "/assets/about/tieUps/Roundglass.png", alt: "Roundglass" },
  { src: "/assets/about/tieUps/toyota.png", alt: "Toyota" },
  {
    src: "/assets/about/tieUps/university_of_quebec.png",
    alt: "University of Quebec",
  },
];

const sidebarLinks = [
  { href: "/about/accreditation", label: "Accreditation and Tie-ups" },
  { href: "/about/location", label: "Campus Location" },
  { href: "/about/vision-mission", label: "Vision and Mission" },
  { href: "/about/leadership", label: "Leadership" },
  { href: "/about/eminent-faculty", label: "Eminent Faculty" },
  { href: "/about/notable-alumni", label: "Notable Alumni" },
];
const AccreditationAndTieups = ({ h1 }) => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/accreditation", label: "About" },
    { label: "Accreditation & Tie-ups" },
  ];
  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title="Accreditation & Tie-ups"
        imageSrc="/assets/aboutUsBanner.webp"
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="hidden md:block  self-start md:sticky md:top-5">
          <AboutSidebar sidebarLinks={sidebarLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 pt-12">
          <Heading
            title={h1}
            titleClassName="text-secondary-color text-left lg:text-5xl"
            subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal lg:max-w-full"
            subtitle="To provide a learning environment in which all students are challenged to develop their intellectual, practical and social skills in a holistic way focusing on leadership, socially responsible behaviour and lifelong learning."
          />
          <IconMarquee icons={icons} />
        </div>
      </Container>
      <Stats />
      <Newsletter />
    </div>
  );
};

export default function Page() {
  const h1 = getH1ForPath("/about/accreditation");
  return <AccreditationAndTieups h1={h1} />;
}
