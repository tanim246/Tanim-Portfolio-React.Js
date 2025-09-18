import { Blocks } from "lucide-react";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineTimeline } from "react-icons/md";

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex flex-col items-center gap-6 text-center sm:text-left">
        <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span>
            <GiSkills />
          </span>
          <span>Professional Journey</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#64e2f5]">
          Work Experience
        </h1>
        <p className="text-md sm:text-xl px-5 sm:px-0 text-[#878f9c] text-center">
          From freelance beginnings to leading development teams, each role has
          shaped my <br className="hidden sm:block" />
          expertise in creating exceptional digital experiences.
        </p>
      </div>
      {/* card start */}
      {/* card no 1 */}
      <div className="mt-18 flex flex-col gap-4 mb-10 sm:flex-row  ">
        <div className="border space-y-4 border-[#0f718a] bg-[#192433] text-white  mx-6 sm:mx-1 py-4  px-4 rounded-xl ">
          <div className="">
            <h1 className="text-2xl font-bold">Full Stack Web Developer</h1>
            <p className="text-[#5fa5fa] text-md">TOJO Global, Dhaka</p>
            <p className="text-[#8e96a3]">2024 - Present</p>
          </div>
          <p className="text-[#cbd0d6]">
            Leading the development of innovative web solutions with modern
            technologies. Specializing in creating seamless user experiences and
            robust backend systems for diverse client projects.
          </p>
          <div>
            <div>
              <p className="text-[#969fab] flex items-center gap-2 font-semibold mb-4">
                <span className="text-[#deb71b]">
                  <GrTechnology />
                </span>
                <span>Technologies</span>
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Html
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Tailwind Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  JavaScript
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  React
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Next.js
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Express
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  MongoDB
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#969fab] flex gap-2  items-center mt-5 font-semibold ">
                <span className="text-[#49de80]">
                  <MdOutlineTimeline />
                </span>
                <span> Key Achievements</span>
              </p>
              <ul className="text-sm  list-disc p-4 ">
                <li className="text-[#cbd0d6]">
                  Developed 15+ high-performance websites with custom features
                </li>
                <li className="text-[#cbd0d6]">
                  Reduced page load time by 40% through optimization techniques
                </li>
                <li className="text-[#cbd0d6]">
                  Implemented CI/CD pipelines improving deployment efficiency
                </li>
                <li className="text-[#cbd0d6]">
                  Mentored 2 junior developers in modern web technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* card no 2 */}
        <div className="border space-y-4 border-[#0f718a] bg-[#192433] text-white  mx-6 sm:mx-1 py-4  px-4 rounded-xl ">
          <div className="">
            <h1 className="text-2xl font-bold">Full Stack Web Developer</h1>
            <p className="text-[#5fa5fa] text-md">TOJO Global, Dhaka</p>
            <p className="text-[#8e96a3]">2024 - Present</p>
          </div>
          <p className="text-[#cbd0d6]">
            Leading the development of innovative web solutions with modern
            technologies. Specializing in creating seamless user experiences and
            robust backend systems for diverse client projects.
          </p>
          <div>
            <div>
              <p className="text-[#969fab] flex items-center gap-2 font-semibold mb-4">
                <span className="text-[#deb71b]">
                  <GrTechnology />
                </span>
                <span>Technologies</span>
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Html
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Tailwind Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  JavaScript
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  React
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Next.js
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Express
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  MongoDB
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#969fab] flex gap-2  items-center mt-5 font-semibold ">
                <span className="text-[#49de80]">
                  <MdOutlineTimeline />
                </span>
                <span> Key Achievements</span>
              </p>
              <ul className="text-sm  list-disc p-4 ">
                <li className="text-[#cbd0d6]">
                  Developed 15+ high-performance websites with custom features
                </li>
                <li className="text-[#cbd0d6]">
                  Reduced page load time by 40% through optimization techniques
                </li>
                <li className="text-[#cbd0d6]">
                  Implemented CI/CD pipelines improving deployment efficiency
                </li>
                <li className="text-[#cbd0d6]">
                  Mentored 2 junior developers in modern web technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* card no 3 */}
        <div className="border space-y-4 border-[#0f718a] bg-[#192433] text-white  mx-6 sm:mx-1 py-4  px-4 rounded-xl ">
          <div className="">
            <h1 className="text-2xl font-bold">Full Stack Web Developer</h1>
            <p className="text-[#5fa5fa] text-md">TOJO Global, Dhaka</p>
            <p className="text-[#8e96a3]">2024 - Present</p>
          </div>
          <p className="text-[#cbd0d6]">
            Leading the development of innovative web solutions with modern
            technologies. Specializing in creating seamless user experiences and
            robust backend systems for diverse client projects.
          </p>
          <div>
            <div>
              <p className="text-[#969fab] flex items-center gap-2 font-semibold mb-4">
                <span className="text-[#deb71b]">
                  <GrTechnology />
                </span>
                <span>Technologies</span>
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Html
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Tailwind Css
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  JavaScript
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  React
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Next.js
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  Express
                </li>
                <li className="bg-[#1c2a42] border border-[#273a69] rounded-full py-1 px-4 text-[#7ca]">
                  MongoDB
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#969fab] flex gap-2  items-center mt-5 font-semibold ">
                <span className="text-[#49de80]">
                  <MdOutlineTimeline />
                </span>
                <span> Key Achievements</span>
              </p>
              <ul className="text-sm  list-disc p-4 ">
                <li className="text-[#cbd0d6]">
                  Developed 15+ high-performance websites with custom features
                </li>
                <li className="text-[#cbd0d6]">
                  Reduced page load time by 40% through optimization techniques
                </li>
                <li className="text-[#cbd0d6]">
                  Implemented CI/CD pipelines improving deployment efficiency
                </li>
                <li className="text-[#cbd0d6]">
                  Mentored 2 junior developers in modern web technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
