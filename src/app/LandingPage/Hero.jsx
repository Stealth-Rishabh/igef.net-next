"use client";
import React from "react";
import Container from "@/components/wrappers/Container";
import Image from "next/image";
// import bgImg from "../../assets/hero-bg.svg";
// import title from "../../assets/hero-title.svg";
const Hero = () => {
  return (
    <section className="hero-section h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <Image
        src="/assets/bg-hero.png"
        alt="a student holding a laptop"
        fill
        className="object-cover"
      />

      {/* <div></div> */}
      <Image
        src="/assets/hero-title.svg"
        alt="title"
        width={400}
        height={200}
        className=" absolute top-20 left-10 sm:top-28 sm:left-32 w-[80vw] sm:w-[40vw] top"
      />
    </section>
  );
};

export default Hero;
