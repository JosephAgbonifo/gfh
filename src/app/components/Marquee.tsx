"use client";

import { InfiniteMovingCards } from "../ui/marquee";

export function Partners() {
  return (
    <div className=" w-[60%] m-auto rounded-md flex flex-col antialiased bg-white items-center justify-center h-[10vh] pt-[-5vh] pb-[-5vh] relative overflow-hidden">
      <InfiniteMovingCards
        items={logos}
        direction="left"
        speed="fast"
      />
    </div>
  );
}


const logos = [
  {
    logo: "/logos/logo.png",
  },
   {
    logo: "/logos/logo.png",
  },
   {
    logo: "/logos/logo.png",
  },
   {
    logo: "/logos/logo.png",
  },
 {
    logo: "/logos/logo.png",
  },
];
