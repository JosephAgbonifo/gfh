import { SpeakerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Speaker() {
  return (
    <>
      <div className="md:w-[70%] p-10 m-auto flex items-center justify-center gap-5">
        <div className="flex-1">
          <Image
            src="/mic.png"
            alt="speaker"
            width={"100"}
            height={"100"}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <p className="text-success mb-2 font-semibold uppercase text-lg md:text-xl">
            Become a Speaker{" "}
          </p>
          <p className="text-brand-primary mb-2 font-semibold uppercase text-xl md:text-2xl">
            Join GFH Lineup of Thought Leaders, Innovators, and Experts
          </p>
          <p>
            Becoming a speaker at one of our events! Speaking at FinTechNGR
            events provides a unique platform to share your insights, showcase
            your expertise, and connect with a diverse audience of fintech
            professionals, investors, policymakers, and innovators from Nigeria
            and beyond.
          </p>
          <Link
            href="Apropos"
            className="py-2 px-7 rounded inline-block mt-7 border-2 text-brand-primary border-brand-primary"
          >
            View upcoming events
          </Link>
        </div>
      </div>
      <div>
        <div className="p-10 md:px-60 text-lg md:text-2xl bg-gray-200 text-brand-primary">
          Benefits of Being a Speaker
        </div>
        <div className="p-10 md:px-60 grid grid-cols-4 gap-5">
          <div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full text-2xl bg-success text-white">
              1
            </div>
            <p className="text-2xl text-brand-primary">Share Your Expertise</p>
            <p className="text-justify text-xs my-3 md:text-[1rem]">
              Gain visibility in the fintech ecosystem by sharing your knowledge
              with industry stakeholders and decision-makers.
            </p>
          </div>
          <div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full text-2xl bg-success text-white">
              2
            </div>
            <p className="text-2xl text-brand-primary">Share Your Expertise</p>
            <p className="text-justify text-xs my-3 md:text-[1rem]">
              Gain visibility in the fintech ecosystem by sharing your knowledge
              with industry stakeholders and decision-makers.
            </p>
          </div>
          <div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full text-2xl bg-success text-white">
              3
            </div>
            <p className="text-2xl text-brand-primary">Share Your Expertise</p>
            <p className="text-justify text-xs my-3 md:text-[1rem]">
              Gain visibility in the fintech ecosystem by sharing your knowledge
              with industry stakeholders and decision-makers.
            </p>
          </div>
          <div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full text-2xl bg-success text-white">
              4
            </div>
            <p className="text-2xl text-brand-primary">Share Your Expertise</p>
            <p className="text-justify text-xs my-3 md:text-[1rem]">
              Gain visibility in the fintech ecosystem by sharing your knowledge
              with industry stakeholders and decision-makers.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 text-center py-10">
          <Image
            src="/bulb.png"
            alt="bulb"
            width={100}
            height={100}
            className="w-20 md:w-50 m-auto"
          />
          <p className="text-success mb-2 font-semibold uppercase text-lg md:text-xl">
            Submit a partnership proposal
          </p>
          <p className="text-brand-primary mb-2 font-semibold text-xl md:text-2xl">
            We Welcome Fresh Voices And Forward-Thinking Ideas
          </p>
          <Link
            href="Apropos"
            className="py-2 px-7 rounded inline-block mt-7 border-2 text-brand-primary border-brand-primary"
          >
            Click here
          </Link>
        </div>
        <div
          className="p-10 md:px-60 bg-black/10 bg-blend-multiply text-white"
          style={{ backgroundImage: "url('/hero/hero2.jpg')" }}
        >
          <p className="text-success mb-2 font-semibold uppercase text-lg md:text-xl">
            SPONSORSHIP AND EXHIBITION OPPORTUNITIES
          </p>
          <p className=" mb-2 font-semibold text-xl md:text-2xl">
            Become A Valued Partner At FinTechNGR Events
          </p>
          <p className="text-xs md:text-[1rem] mt-1">
            Gain exceptional visibility within Nigeria’s thriving fintech
            community Our sponsorship and exhibition packages provide companies
            with a platform to showcase their brand, connect with
            decision-makers, and gain exposure to a diverse audience of fintech
            professionals, innovators, and investors.
          </p>
          <Link
            href="Apropos"
            className="py- px-7 rounded inline-block mt-7 border-2 text-white border-white"
          >
            Register Here
          </Link>
          <div className="grid grid-cols-2 gap-5">
            <div className="my-10">
              {" "}
              <SpeakerIcon />
              <p className="uppercase text-xs my-2">AMPLIFY YOUR BRAND</p>
              <p className="text-xs">
                Reach a targeted audience of industry stakeholders and raise
                brand awareness through prominent logo placements, promotional
                materials, and speaking opportunities.
              </p>
            </div>
            <div className="my-10">
              {" "}
              <SpeakerIcon />
              <p className="uppercase text-xs my-2">AMPLIFY YOUR BRAND</p>
              <p className="text-xs">
                Reach a targeted audience of industry stakeholders and raise
                brand awareness through prominent logo placements, promotional
                materials, and speaking opportunities.
              </p>
            </div>
            <div className="my-10">
              {" "}
              <SpeakerIcon />
              <p className="uppercase text-xs my-2">AMPLIFY YOUR BRAND</p>
              <p className="text-xs">
                Reach a targeted audience of industry stakeholders and raise
                brand awareness through prominent logo placements, promotional
                materials, and speaking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
