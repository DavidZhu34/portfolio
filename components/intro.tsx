"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState } from "react";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const email = "davidzhu34@berkeley.edu";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="text-left sm:mt-0 scroll-mt-[100rem] lg:mb-40 lg:mt-20"
    >
      
      <div className="flex flex-row gap-20">
        <motion.h1
          className="mb-10 mt-4 px-4 text-4xl font-large !leading-[1.5] sm:text-7xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hi, I'm David.</span> <br /> I'm a{" "}
          <span>
            Product Manager <br />
            at{" "}
            <Link href="https://algoverseairesearch.org/" target="_blank" rel="noopener noreferrer" 
            className="text-blue-300 hover:text-blue-500">
              Algoverse
            </Link>.
          </span>
        </motion.h1>
        <Image
          src="/david.jpg"
          alt="David headshot"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>

      


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-left gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer bg-black/5"
          href="/David Zhu Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  bg-black/5 text-black/60"
          href="https://linkedin.com/in/david-zidong-zhu"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  bg-black/5 text-black/60"
          href="https://github.com/DavidZhu34"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer  bg-black/5"
        onClick={handleCopyClick}
        >
        {isCopied ? "Copied Email to Clipboard!" : "davidzhu34@berkeley.edu"}
        </a>
      </motion.div>
    </section>
  );
}
