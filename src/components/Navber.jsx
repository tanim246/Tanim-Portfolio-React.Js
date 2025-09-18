
import { Link } from "react-router-dom";
import { FaBook, FaCode, FaFrog } from "react-icons/fa";
import { HiTv } from "react-icons/hi2";
import { IoHomeSharp } from "react-icons/io5";
import { MdCastForEducation, MdPermContactCalendar } from "react-icons/md";


const Navber = () => {
  return (
    <div className="p-6 sm:p-0">
      <nav className="flex justify-center border-2 border-[#0abbcf] mb-10  p-5 sm:max-w-4xl sm:mx-auto mt-2 sm:mt-7 rounded-full  bg-[#112836]">
        <ul className="flex px-6 sm:px-0 gap-8 text-white">
          <Link to="/home" className="flex items-center gap-2 cursor-pointer  font-semibold">
            <IoHomeSharp />
           <span className="hidden sm:block"> Home</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 cursor-pointer font-semibold">
            <FaFrog />
          <span className="hidden sm:block">  About</span>
          </Link>
          <Link to="/skills" className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <FaCode />
           <span className="hidden sm:block"> Skills</span>
          </Link>
          <Link to="/experience" className="flex items-center gap-2 cursor-pointer font-semibold">
            <FaBook />
           <span className="hidden sm:block"> Experience</span>
          </Link>
          <Link to="/education" className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <MdCastForEducation />
          <span className="hidden sm:block">  Education</span>
          </Link>
          <Link to="/projects" className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
           <HiTv />

           <span className="hidden sm:block"> Projects</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 cursor-pointer font-semibold">
            {" "}
            <MdPermContactCalendar />
          <span className="hidden sm:block">  Contact</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
