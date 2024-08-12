import AboutUs from "@/components/aboutus";
import Apply from "@/components/apply";
import PhotoAreenBento from "@/components/photoareen";
import Blogs from "@/components/blogs";
import Hero from "@/components/hero";
import { PhotoScroll } from "@/components/photo";
import PhotoBento from "@/components/photoBento";
import Image from "next/image";
import Departments from "@/components/department";

export default function Home() {
  return (
    <div className="bg-black max-w-[100%] overflow-x-hidden flex flex-col items-center justify-center">
      <Hero/>
      <AboutUs/>
      {/* <Apply/> */}
      {/* <PhotoScroll/> */}
      <PhotoBento/>
      <Departments/>
      <Blogs/>
    </div>
  );
}
