
import { FaBook, FaCode, FaFrog } from "react-icons/fa";
import { HiTv } from "react-icons/hi2";
import { IoHomeSharp } from "react-icons/io5";
import { MdCastForEducation, MdPermContactCalendar } from "react-icons/md";


const Navber = () => {
  return (
    <div className="p-6 sm:p-0">
      <nav className="flex justify-center border-2 border-[#0abbcf]  p-5 sm:max-w-4xl sm:mx-auto mt-2 sm:mt-7 rounded-full  bg-[#112836]">
        <ul className="flex gap-8 text-white">
          <li className="flex items-center gap-2 cursor-pointer  font-semibold">
            <IoHomeSharp />
           <span className="hidden sm:block"> Home</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            <FaFrog />
          <span className="hidden sm:block">  About</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <FaCode />
           <span className="hidden sm:block"> Skills</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            <FaBook />
           <span className="hidden sm:block"> Experience</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <MdCastForEducation />
          <span className="hidden sm:block">  Education</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
           <HiTv />

           <span className="hidden sm:block"> Projects</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <MdPermContactCalendar />
          <span className="hidden sm:block">  Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
