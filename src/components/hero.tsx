import Image from "next/image";

function Hero() {
  return (
    <div
      className="flex items-center  justify-center mt-[5vh] min-h-[95vh] max-h-[100vh] text-white bg-black"
      // style={{
      //   backgroundImage: `url('https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      // }}
    >
      <div className="flex items-center w-[100%] h-[100%] flex-col justify-center font-extralight">
        <p className="gg p-0 m-0 text-gray-300 text-[10vw]">
          man
          <span>
            <i>i</i>
          </span>
          palthetalk
        </p>
        <p className="text-4xl text-gray-500 font-bold">estb. 2010</p>
        {/* <div className="flex my-5 gap-9">
          <button className="border-gray-400 border-2 text-gray-400 text-2xl min-w-[10rem] rounded-xl font-semibold p-5 mt-4">
            Continue
          </button>
          <button className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-800 text-gray-600 text-2xl min-w-[10rem] rounded-xl font-semibold p-5 mt-4">
            Apply
          </button>
        </div> */}
        {/* <button className="bg-white text-black p-2 rounded-lg mt-4">
          Continue
        </button>
        <button className="bg-white text-black p-2 rounded-lg mt-4">
          Continue
        </button> */}
      </div>
    </div>
  );
}

export default Hero;
