import Form from "./contact/ContactFrom";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import { GiFlatStar } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="max-w-6xl pb-8 mb-10 text-white mx-auto px-4 sm:px-8">
      <div className="flex flex-col items-center gap-6 text-center sm:text-left">
        <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span>
            <GiFlatStar />
          </span>
          <span> Get In Touch</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#64e2f5]">
          Let's Work Together
        </h1>
        <p className="text-md sm:text-xl text-[#878f9c] text-center">
          Have a project in mind or want to discuss potential opportunities? I'm
          always open <br className="hidden sm:block" /> to new challenges and
          collaborations.
        </p>
      </div>

      {/* contact start */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* left info */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              Contact Information
            </h1>
            <p className="text-[#878f9c] text-[16px] sm:text-[18px]">
              Feel free to reach out through any of these channels. I'm looking{" "}
              forward to hearing from you!
            </p>
          </div>

          {/* info list */}
          <div className="space-y-5">
            {/* Email */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#c083fc] border border-white rounded-xl text-3xl p-3">
                <MdOutlineMailOutline />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Email</span>
                <span className="text-[#878f9c]">tanim@gmail.com</span>
              </p>
            </div>

            {/* Location */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#5fa5fa] border border-white rounded-xl text-3xl p-3">
                <SlLocationPin />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Location</span>
                <span className="text-[#878f9c]">
                  07 No, Chadnigat UP, Moulvibazar Sadar-3200
                </span>
              </p>
            </div>

            {/* Phone */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#49de80] border border-white rounded-xl text-3xl p-3">
                <PiPhoneCallLight />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Phone & WhatsApp</span>
                <span className="text-[#878f9c]">+880 1646-471206</span>
              </p>
            </div>

            {/* Response Time */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#f7bc25] border border-white rounded-xl text-3xl p-3">
                <FaRegClock />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Response Time</span>
                <span className="text-[#878f9c]">
                  Typically within 24 hours
                </span>
              </p>
            </div>
            {/*  Quick Response*/}
            <div className="border  border-[#303a4d] p-4 rounded-xl flex i gap-4 bg-[#142130]">
              <p className="space-y-1">
                <p className="flex items-center gap-3">
                  {" "}
                  <span className="text-[#f7bc25] text-2xl">
                    <GoNorthStar />
                  </span>
                  <span className="font-semibold">Quick Response</span>
                </p>
                <span className="text-[#878f9c]">
                  I prioritize all incoming messages and strive to respond
                  within 24 hours. For urgent matters, feel free to call or
                  WhatsApp directly.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="w-full lg:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
