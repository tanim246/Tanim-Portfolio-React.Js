import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import Button from "./buttons/HeroBtn";
import Button2 from "./buttons/MyCode";
import Tanim from "../public/Images/myimg.jpg"
const App = () => {
  return (
    <div className=" max-w-6xl mx-auto ">
      <div className=" flex flex-col-reverse gap-8 justify-between items-center sm:flex-row  sm:mt-25">
        <div className="space-y-7 ml-5 sm:ml-0  relative">
          <p className="text-5xl flex space-y-3 flex-col font-bold">
            {" "}
            <span className="">Hello, It's Me</span>
            <span className=" text-[#06b6c9]">Muhammad Tanim</span>
          </p>
          <p className="border border-[#18335c] bg-[#0e2330] w-55 text-center py-2 rounded-xl  "> ✨  Web developer </p>
          <p className="text-md sm:text-xl">JavaScript lover 🚀 | Engineering the Future of Web Technology</p>
          <div className="flex gap-4  sm:gap-6 ">
            <div><Button /></div>
            <div>
            <Button2 />
            </div>
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
          {/* position */}
          <span className="border absolute animate-bounce  left-40 top-[-40px] rounded-lg border-[#29214a] bg-[#1c1c3b] text-[#b87ef2] py-2 px-6 ">Development Magic</span>
          <span className="border absolute animate-bounce hidden sm:block right-[-50px] bottom-48 rounded-lg border-[#3d3723] bg-[#252625] text-[#e6b225] py-2 px-6 ">Innovation</span>
          <span className="border absolute animate-bounce  hidden sm:block right-[-100px] top-0 rounded-lg border-[#142645] bg-[#12203b] text-[#5a9ced] py-2 px-6 ">Clean Code</span>
        </div>
        {/* right part */}
        <div className="border-2 border-[#06b6c9] rounded-full p-4 mr-5 ">
         <img src={Tanim} alt="tanim" className="rounded-full" width="300px" />
         
        </div>
      </div>
    </div>
  );
};

export default App;
