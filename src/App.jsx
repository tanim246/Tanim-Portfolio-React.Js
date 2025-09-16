import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import Button from "./buttons/HeroBtn";
import DeveloperProfile from "./buttons/MyCode";

const App = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-25 h-[400px]">
        <div className="space-y-7 ml-5 sm:ml-0">
          <p className="text-5xl flex space-y-3 flex-col font-bold">
            {" "}
            <span className="">Hello, It's Me</span>
            <span className=" text-[#06b6c9]">Muhammad Tanim</span>
          </p>
          <p className="border border-[#18335c] bg-[#0e2330] w-55 text-center py-2 rounded-xl  "> ✨  Web developer </p>
          <p className="text-md sm:text-xl">JavaScript lover 🚀 | Engineering the Future of Web Technology</p>
          <div className="flex gap-6 ">
            <div><Button /></div>
            <button className="flex items-center text-gray-300 justify-center rounded-[6px] border-2 border-[#353f4f] px-6 gap-2 bg-[#111826] cursor-pointer   ">
              <span>Download CV</span>
              <span>
                <PiReadCvLogo />
              </span>{" "}
            </button>
          </div>
          <div className="flex text-2xl gap-4">
            <span className="p-2 border border-[#4ecca2] cursor-pointer text-[#4ecca2] hover:bg-[#4ecca2] hover:text-black  rounded-full">
              <FaLinkedin />
            </span>
            <span className="p-2 border border-[#4ecca2] cursor-pointer text-[#4ecca2] hover:bg-[#4ecca2] hover:text-black  rounded-full">
              <FaTwitter />
            </span>
            <span className="p-2 border border-[#4ecca2] cursor-pointer text-[#4ecca2] hover:bg-[#4ecca2] hover:text-black  rounded-full">
              <FaGithub />
            </span>
            <span className="p-2 border border-[#4ecca2] cursor-pointer text-[#4ecca2] hover:bg-[#4ecca2] hover:text-black  rounded-full">
              <FaFacebook />
            </span>
            <span className="p-2 border border-[#4ecca2] cursor-pointer text-[#4ecca2] hover:bg-[#4ecca2] hover:text-black  rounded-full">
              <FaSquareInstagram />
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
