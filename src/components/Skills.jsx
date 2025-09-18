import { GiSkills } from "react-icons/gi";
import iconIMg from "../../public/Images/icon.PNG";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10">
      {/* top path */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-6 text-center sm:text-left">
          <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
            <span>
              <GiSkills />
            </span>
            <span>Technical Mastery</span>
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#64e2f5]">
            Skills & Expertise
          </h1>
          <p className="text-md sm:text-xl px-5 sm:px-0 text-[#878f9c] text-center">
            A comprehensive showcase of my technical arsenal, from frontend
            magic to backend <br className="hidden sm:block" /> power and
            creative design.
          </p>
        </div>
        {/* imag part */}
        <div className="relative  animate-pulse">
          <img
            src={iconIMg}
            alt="iconsimg"
            className="w-[450px] drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          />
        </div>
      </div>
      {/* down path */}
      <div className="grid gap-4 mt-12 mx-6 sm:mx-0 grid-cols-1 sm:grid-cols-3">
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
        <div className=" border  p-4 bg-[#161e2e]  border-[#283040] rounded-xl">
          {/* card start */}
          <div className="space-y-5 ">
            <p className="text-2xl flex gap-3 items-center font-semibold border border-gray-500 rounded-md p-4 ">
              <span className="text-[#5fa5fa]">
                <FaCode />
              </span>
              <span>Frontend Development</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Html
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                Tailwind Css
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                JavaScript
              </li>
              <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4">
                React
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end part */}
      <div className="flex flex-col gap-6 items-center mt-15">
        <p className="text-[#9da3a2] text-xl px-6 text-center">
          Ready to bring your vision to life with cutting-edge technology?
        </p>
        <a
          href="#"
          className="relative inline-block py-4 px-10 rounded-2xl bg-[#3787f0] font-semibold text-white 
             transition duration-300 hover:shadow-[0_0_12px_#3787f0,0_0_50px_#18b5ad]"
        >
          Start a Project
        </a>
      </div>
    </div>
  );
};

export default Skills;
