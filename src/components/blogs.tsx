import Blog from "./blog";
import { ArrowRight } from "lucide-react";

function Blogs() {
  return (
    <div className="bg-black py-[5rem] flex flex-col justify-center gap-5 items-center px-3">
      <h1 className="text-gray-200 md:text-[5vw] text-[13vw] leading-[4rem] font-extrabold text-center">
        EDITOR&apos;S PICKS
      </h1>
      <p className="md:text-xl text-gray-300 text-center">a curated selection of standout content</p>
      <button className="p-5 md:text-lg text-[5vw] gap-3 text-black hover:gap-5 my-5 flex items-center justify-between bg-white  rounded-sm transition-all font-semibold py-2 mt-5">
        Visit Blogs <ArrowRight className="" />
      </button>
      <div className="w-[100%] my-[5rem] min-h-[20rem]">
        <Blog />
      </div>
    </div>
  );
}

export default Blogs;
