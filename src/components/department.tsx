"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function Departments() {
  return (
    <div>
      <div className="flex p-2 items-start justify-start">
        <div className="flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black items-center gap-5 pt-[5rem] p-3 justify-center rounded-xl w-full">
          <h1 className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] font-extrabold text-center">
            DEPARTMENTS
          </h1>
        </div>
      </div>

      <div className="max-w-full lg:max-w-7xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl px-4 sm:px-6 md:px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Photography",
    description:
      "If you love capturing stories and moments in photos, this is the department you definitely want to be a part of; Covering events, capturing moments, finding stories and creating memories",
    link: "/apply",
  },
  {
    title: "Videography",
    description: "",
    link: "https://netflix.com",
  },
  {
    title: "Writing",
    description: "",
    link: "https://google.com",
  },
  {
    title: "Web & App Development",
    description: "",
    link: "https://meta.com",
  },
  {
    title: "Art & Graphics",
    description: "",
    link: "https://amazon.com",
  },
  {
    title: "Business development & public relations",
    description: "",
    link: "https://microsoft.com",
  },
];

export default Departments;
