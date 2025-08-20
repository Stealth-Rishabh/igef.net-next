"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const IconItem = ({ src, alt }) => {
  return (
    <div className="aspect-square w-32 rounded mx-4 relative hover:-translate-y-2 duration-300 ease-in-out">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
};

export function IconMarquee({ icons }) {
  const firstRow = icons.slice(0, Math.ceil(icons.length / 2));
  const secondRow = icons.slice(Math.ceil(icons.length / 2));

  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden  gap-8">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {firstRow.map((icon, index) => (
          <IconItem key={index} {...icon} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((icon, index) => (
          <IconItem key={index} {...icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {firstRow.map((icon, index) => (
          <IconItem key={index} {...icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default IconMarquee;
