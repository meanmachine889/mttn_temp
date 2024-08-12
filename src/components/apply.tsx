import { ArrowUpRight } from "lucide-react";

function Apply() {
  return (
    <div className="w-[100%] min-h-[30rem] bg-black flex items-center justify-around">
      <div>
        <p className="text-6xl text-playfair leading-normal font-semibold text-white">
          Be a part of
          <br />
          the MTTN Journey !
        </p>
      </div>
      <div className="bg-gradient-to-b text-playfair from-zinc-900 to-black text-white flex items-center gap-9 justify-center text-5xl h-[10rem] p-9 rounded-xl">
        <p className="text-right">Recruitment<br/>2024</p>
        <p className="text-5xl"><ArrowUpRight className="w-[7rem] h-[7rem]"/></p>
      </div>
    </div>
  );
}

export default Apply;
