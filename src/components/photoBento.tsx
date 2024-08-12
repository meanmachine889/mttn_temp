import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const images = [
  // "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  // "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  // "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
  // "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  // "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  ["15gTsJ5ecc1DiidWpac2lttEUc20Y8hSa", "Shreyash Shubh"],
  ["1TrvfuF4qmBkrUxopYUr3Bk1EQaSDw0x_", "Swastik"],
  ["1P-hXRvsft2S4fX9QEmXmTEXzvYpGhr4v", "Sourav"],
  ["1f8wO2fIGSZQvB3DAQGLCLWO7XyrZJ4jU", "Saptashwa"],
  ["1wITjJLr4feRnlxDMadz0_-isTcK99gwU", "Johaan"],
  ["1-_9BUMHhn16i3sr0vgx5ajCFZnMF1CIm", "Vaibhav"],
  ["1BF-psWyiOex3Qnepto00eFfR_Mrb8vwe", "Saptashwa"],
  ["1Soo3aNYchh1MuC0G70JEe3SGihiSwZGf", "Avadh"],
  ["1NeCHplOHWlqIOpgIjYQ3o2THZa4LgUB8", "Rishi"],
  ["1nW4gOmSt8_YbIEKSJMi8VMza-0hdBRXv", "Saptashwa"],
];

function PhotoBento() {
  return (
    <div className="flex p-2 items-start justify-start w-[100%]">
      <div className="flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black items-center gap-5 pt-[5rem] p-3 justify-center rounded-xl w-full">
        <h1 className="text-gray-200 md:text-[5vw] text-[13vw] leading-[4rem] font-extrabold">
          COLLECTION
        </h1>
        <p className="md:text-xl text-gray-300">clicked by our crew</p>
        <button className="p-5 md:text-lg gap-3 text-gray-400 hover:gap-5 flex items-center justify-between bg-[#0e0d0d] rounded-md transition-all font-semibold py-2 mt-5">
          Visit Gallery <ArrowRight className="" />
        </button>
        <div className="grid w-full bg-black mt-[5rem] auto-rows-[20rem] grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {images.slice(0, 10).map((imageAndAuthor, i) => (
            <div
              key={i}
              className={`relative row-span-1 gap-2 ${
                i === 3 || i === 6
                  ? "col-span-2 sm:col-span-1 md:col-span-2"
                  : ""
              } group`}
            >
              <Image
                src={`https://drive.google.com/thumbnail?id=${imageAndAuthor[0]}&sz=w1500`}
                alt={`Image ${i}`}
                fill={true}
                objectFit="cover"
                quality={100}
                priority={i < 3}
                className="rounded-lg"
              />
              <div className="absolute items-center w-[100%] flex justify-between font-poppins bottom-0 left-0 p-2 bg-black/70 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>Clicked By {imageAndAuthor[1]}</p>
                <ArrowUpRight className="h-9 w-9" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoBento;
