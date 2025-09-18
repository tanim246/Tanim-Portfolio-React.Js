import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { GiFlatStar } from "react-icons/gi";
import { MdEmail, MdPhone } from "react-icons/md";

const About = () => {
  return (
    <div className=" text-gray-200 max-w-6xl mx-6  mb-10  sm:mx-auto">
      {/* Available badge */}
      <div className="mb-4 flex">
        <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span>
            <GiFlatStar />
          </span>
          <span> Get In Touch</span>
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6">
        WHO I AM?
      </h1>
      <p className="mb-4 text-lg">
        Every great product starts with a{" "}
        <span className="text-teal-300 font-semibold">vision</span>—and I am the
        person who transforms that vision into a
        <span className="text-teal-300 font-semibold">
          {" "}
          fast, scalable, and user-friendly web experience.
        </span>
      </p>
      <p className="mb-10 text-gray-400">
        I'm <span className="text-white font-semibold">Muhammad Tanim</span>, a
        Web Developer with{" "}
        <span className="text-teal-300">3 month+</span> of hands-on experience.
        My specialty lies in JavaScript & React.js, along with building complete
        end-to-end solutions using Next.js, Node.js, Express.js, MongoDB, and
        MySQL.
      </p>

      {/* How I help */}
      <h2 className="text-xl font-semibold mb-4 text-white">
        How I Help Businesses
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition">
          <h3 className="font-bold text-white mb-2">
            ⚡ Full Website Development
          </h3>
          <p className="text-gray-400">
            Building entire websites from scratch with modern technologies
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition">
          <h3 className="font-bold text-white mb-2">
            ✨ Feature Implementation
          </h3>
          <p className="text-gray-400">
            Adding powerful new features to existing platforms
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition">
          <h3 className="font-bold text-white mb-2">
            🚀 Performance Optimization
          </h3>
          <p className="text-gray-400">
            Optimizing for speed, scalability, and SEO
          </p>
        </div>
      </div>

      {/* Technical Expertise */}
      <h2 className="text-xl font-semibold mb-4">Technical Expertise</h2>
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "React.js",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "Redux",
          "Tailwind CSS",
          "Bootstrap",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "REST APIs",
          "Git",
          "SEO",
        ].map((tech) => (
          <span className="px-4 py-1 border border-[#00d6c1] rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Project Highlights */}
      <h2 className="text-xl font-semibold mb-4">Project Highlights</h2>
      <div className="space-y-4 mb-10">
        <div className="p-5 border-l-4 bg-[#152436] rounded-md">
          <h3 className="font-bold text-white">
            TOJO Global Agency Website & Admin Dashboard
          </h3>
          <p className="text-gray-400">
            Developed a digital marketing agency platform with services like web
            dev, blockchain solutions, page moderation & more.
          </p>
        </div>
        <div className="p-5 border-l-4  bg-[#152436] rounded-md">
          <h3 className="font-bold text-white">
            TS Geosystem E-commerce Website
          </h3>
          <p className="text-gray-400">
            Built an e-commerce system for surveying equipment with database
            architecture, APIs, payment processing & invoice generation.
          </p>
        </div>
        <div className="p-5 border-l-4 bg-[#152436] rounded-md">
          <h3 className="font-bold text-white">TOJO News Platform</h3>
          <p className="text-gray-400">
            Created a modern news platform with premium/free content, real-time
            notifications and authentication systems.
          </p>
        </div>
      </div>

      {/* Passion & Goal */}
      <div className="p-6 border border-teal-600 bg-[#0f1c2a] rounded-xl mb-10">
        <h3 className="font-bold text-teal-400 mb-2">🚀 My Passion & Goal</h3>
        <p className="text-gray-400">
          I'm passionate about building modern, interactive, and scalable
          applications that empower businesses to grow in the digital space. I
          thrive on continuous learning, exploring new technologies, and
          delivering impactful solutions that make a difference.
        </p>
      </div>

      {/* Contact Section */}
      <h2 className="text-xl font-semibold mb-4">Let's Connect!</h2>
      <p className="text-gray-400 mb-6">
        Let's build something impactful together, feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-[#101a29] rounded-md flex items-center gap-3">
          <MdEmail className="text-teal-400 text-xl" />
          <span>muhammadtanim@gmail.com</span>
        </div>
        <div className="p-4 bg-[#101a29] rounded-md flex items-center gap-3">
          <MdPhone className="text-teal-400 text-xl" />
          <span>+880 1646 471206</span>
        </div>
      </div>
      <div className="p-4 bg-[#101a29] rounded-md mb-10">
        <span className="text-teal-400 font-semibold">Portfolio: </span>
        up coming......
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-10">
        <a href="#" className="p-2 bg-[#152436] text-[#2cd4bd] rounded-md">
          <FaLinkedin />
        </a>
        <a href="#" className="p-2 bg-[#152436] text-[#2cd4bd] rounded-md">
          <FaGithub />
        </a>
        <a href="#" className="p-2 bg-[#152436] text-[#2cd4bd] rounded-md">
          <FaTwitter />
        </a>
        <a href="#" className="p-2 bg-[#152436] text-[#2cd4bd] rounded-md">
          <FaFacebook />
        </a>
        <a href="#" className="p-2 bg-[#152436] text-[#2cd4bd] rounded-md">
          <FaInstagram />
        </a>
      </div>

      {/* Button */}
      <a
        href="#"
        className="inline-block py-3 px-8 rounded-lg bg-[#00d6c1] font-semibold text-white transition duration-300 hover:shadow-[0_0_25px_#00d6c1,0_0_50px_#00d6c1]"
      >
        Get In Touch →
      </a>
    </div>
  );
};

export default About;
