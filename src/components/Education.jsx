
import { FaCircle } from "react-icons/fa";
import { GiFlatStar } from "react-icons/gi";
import { GrLocationPin } from "react-icons/gr";

import { TbSchool } from "react-icons/tb";

const Education = () => {
  return (
    <div className="max-w-5xl mb-10 mx-auto">
      <div className="flex flex-col items-center gap-4 text-center sm:text-left">
        <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span>
            <GiFlatStar />
          </span>
          <span>Academic Journey</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#64e2f5]">
          Education
        </h1>
        <p className="text-md sm:text-xl text-[#878f9c] text-center">
          Building a strong academic foundation while developing practical
          skills that bridge <br className="hidden sm:block" /> theoretical
          knowledge with real-world applications.
        </p>
      </div>

      {/* contant */}
      {/* ssc */}
      <div className="mt-10  mx-6">
        {/* 1 */}
        <div className="border rounded-xl border-gray-700 bg-[#1b2333] p-6">
          <div className="flex flex-col  gap-3">
            <p className="flex gap-1">
              <span className="text-[#f04343] text-xs">
                <FaCircle />
              </span>{" "}
              <span className="text-[#ebb207] text-xs">
                <FaCircle />
              </span>{" "}
              <span className="text-[#21c45d] text-xs">
                <FaCircle />
              </span>{" "}
            </p>
            <p className="flex mt-2 items-center gap-4">
              <span className="border border-[#263d69] text-2xl p-3 text-[#5fa5fa] bg-[#232a45] rounded-xl">
                <TbSchool />
              </span>
              <p className="flex flex-col gap-1">
                <span className=" sm:text-xl font-semibold">
                  {" "}
                  Secondary School Certificate ( SSC )
                </span>
                <span className="text-sm flex items-center gap-1 text-[#5085cc]">
                  {" "}
                  <GrLocationPin />
                  Shah helal High School
                </span>
              </p>
            </p>
          </div>
          {/* box */}
          <div className="grid grid-cols-1 mt-6 sm:grid-cols-3 gap-4">
            <div className="bg-[#192742] border flex flex-col items-center py-2  border-[#213966] rounded-xl">
              <p className="text-2xl font-bold text-[#5fa5fa]">4.11</p>
              <span className="text-[#9da4b0] text-xs">Current GPA</span>
            </div>
            <div className="bg-[#232342] border flex flex-col items-center py-2  border-[#3f2d66] rounded-xl">
              <p className="text-2xl font-bold text-[#c083fc]">Science</p>
              <span className="text-[#9da4b0] text-xs">Grouph</span>
            </div>
            <div className="bg-[#152d40] border flex flex-col items-center py-2  border-[#11465c] rounded-xl">
              <p className="text-2xl font-bold text-[#21d2ed]">2020-2021</p>
              <span className="text-[#9da4b0] text-xs">Session</span>
            </div>
          </div>
        </div>
      </div>
      {/* diploma */}
      <div className="mt-10  mx-6">
        {/* 1 */}
        <div className="border rounded-xl border-gray-700 bg-[#1b2333] p-6">
          <div className="flex flex-col  gap-3">
            <p className="flex gap-1">
              <span className="text-[#f04343] text-xs">
                <FaCircle />
              </span>{" "}
              <span className="text-[#ebb207] text-xs">
                <FaCircle />
              </span>{" "}
              <span className="text-[#21c45d] text-xs">
                <FaCircle />
              </span>{" "}
            </p>
            <p className="flex mt-2 items-center gap-4">
              <span className="border border-[#263d69] text-2xl p-3 text-[#5fa5fa] bg-[#232a45] rounded-xl">
                <TbSchool />
              </span>
              <p className="flex flex-col gap-1">
                <span className="sm:text-xl font-semibold">
                  {" "}
                  Diploma In Elcetronics Engineering
                </span>
                <span className="text-sm flex items-center gap-1 text-[#5085cc]">
                  {" "}
                  <GrLocationPin />
                 Moulvibazar Polytechnic Institute
                </span>
              </p>
            </p>
          </div>
          {/* box */}
          <div className="grid grid-cols-1 mt-6 sm:grid-cols-3 gap-4">
            <div className="bg-[#192742] border flex flex-col items-center py-2  border-[#213966] rounded-xl">
              <p className="text-2xl font-bold text-[#5fa5fa]">Up Coming</p>
              <span className="text-[#9da4b0] text-xs">Current GPA</span>
            </div>
            <div className="bg-[#232342] border flex flex-col items-center py-2  border-[#3f2d66] rounded-xl">
              <p className="text-2xl font-bold text-[#c083fc]">Elcetronics</p>
              <span className="text-[#9da4b0] text-xs">Dipartment</span>
            </div>
            <div className="bg-[#152d40] border flex flex-col items-center py-2  border-[#11465c] rounded-xl">
              <p className="text-2xl font-bold text-[#21d2ed]">2021-2022</p>
              <span className="text-[#9da4b0] text-xs">Session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
