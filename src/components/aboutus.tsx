import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-3 items-center md:items-stretch w-[100%] p-3">
      {/* Left Section */}
      <div className="flex max-w-[97vw] md:w-[50%] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-800 flex-1 min-h-[100%] font-bold text-[5vw] lg:text-[2vw] md:text-[2.5vw] rounded-xl flex-col p-5 leading-relaxed text-gray-400 items-center justify-center">
        <p>
          We are not just another student club. We are a close-knit family of{" "}
          <span className="text-gray-300 font-semibold">
            <> creators</>
          </span>
          ,{" "}
          <span className="text-gray-300 font-semibold">
            <> writers</>
          </span>
          , and{" "}
          <span className="text-gray-300 font-semibold">
            <> developers</>
          </span>
          , working together to highlight the vibrant life at Manipal
          and our college.<br/><br/> Our departments handle everything from capturing
          memorable moments in photos and videos, to crafting insightful blogs,and developing innovative web and app solutions.
        </p>
      </div>

      {/* Right Section */}
      <div className="grid md:grid-cols-2 md:w-[50%] grid-cols-1 gap-2 rounded-xl leading-relaxed text-gray-400 items-center justify-center md:min-h-full">
        <div className="md:min-h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-800 font-bold text-gray-300 flex-col gap-7 rounded-lg text-xl md:text-[2vw] text-[5vw] p-5 flex items-start justify-between">
          <p className="leading-snug text-gray-400">
            Largest student body in Manipal with over 100+ members across all domains !
          </p>
          <button className="bg-[#0e0d0d] md:text-[1.4vw] text-[5vw] p-3 flex items-center justify-center gap-3 text-gray-500 rounded-xl">Explore Domains <ArrowRight/></button>
        </div>
        <div className="min-h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-800 text-gray-300 text-[1w] md:text-[2vw] font-bold rounded-lg hidden md:flex flex-col items-start justify-between p-5">
          <p>Be a part of our journey !</p>
          <p className="text-xl text-gray-500">Open for all batches</p>
        </div>
        <div className="min-h-full bg-gradient-to-b from-zinc-800 to-zinc-900 text-3xl font-bold text-gray-300 text-[1.5vw] rounded-lg hidden md:flex items-start p-5 justify-start">
          Recruitments are open
        </div>
        <div className="min-h-full p-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-zinc-900 to-zinc-800 rounded-lg flex items-center justify-center">
          <a
            href="/"
            className="hehe text-gray-300 flex items-center group md:text-[2vw] text-[10vw] transition-all"
          >
            <i>Apply</i>
            <ArrowUpRight className="md:h-[2vw] h-[8vw] md:w-[2vw] w-[8vw] " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
