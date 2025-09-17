import React from "react";
import Form from "./contact/ContactFrom";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-6xl border pb-8 text-white mx-auto ">
      <div className="flex flex-col items-center gap-6 ">
        <p className="rounded-full border py-1 px-10 text-center border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span></span>
          <span> Get In Touch</span>
        </p>
        <h1 className="text-5xl font-bold text-[#64e2f5]">
          Let's Work Together
        </h1>
        <p className="text-md px-6 sm:px-0 sm:text-xl text-center">
          Have a project in mind or want to discuss potential opportunities? I'm
          always open <br className="hidden sm:block" /> to new challenges and
          collaborations.
        </p>
      </div>
      {/* contact start */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-start">
        <div>
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-semibold">Contact Information</h1>
            <p className="text-[#878f9c] text-[18px]">
              Feel free to reach out through any of these channels. I'm looking{" "}
              <br /> forward to hearing from you!
            </p>
          </div>
          {/* info */}
          <div className="space-y-5 px-6 sm:px-0">
            {/* Email */}
            <div className="text-white border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#c083fc] border border-white rounded-xl text-3xl  p-3">
                <MdOutlineMailOutline />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Email</span>
                <span className="text-[#878f9c]">tanim@gmail.com</span>
              </p>
            </div>
            {/* Location */}
            <div className="text-white border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#5fa5fa] border border-white rounded-xl text-3xl  p-3">
                <SlLocationPin />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Location</span>
                <span className="text-[#878f9c]">
                  07 No, Chadnigat UP, Moulvibazar Sadar-3200
                </span>
              </p>
            </div>
            {/* phone & whatsapp */}
            <div className="text-white border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#49de80] border border-white rounded-xl text-3xl  p-3">
                <PiPhoneCallLight />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Phone & WhatsApp</span>
                <span className="text-[#878f9c]">+880 1646-471206</span>
              </p>
            </div>
            {/* Response Time */}
            <div className="text-white border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#f7bc25] border border-white rounded-xl text-3xl  p-3">
                <FaRegClock />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Response Time</span>
                <span className="text-[#878f9c]">
                  Typically within 24 hours
                </span>
              </p>
            </div>
          </div>
        </div>
        <div><Form /></div>
      </div>
    </div>
  );
};

export default Contact;
