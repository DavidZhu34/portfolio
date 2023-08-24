"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    
    <motion.section
      ref={ref}
      className="mb-28 max-w-[75rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-40">
      <p className="mb-3">
        Before I dove into a life of development, I taught improvisational theory piano during undergrad as a sponsored student instructor, kickstarted a 
        band, and performed in venues around the Bay Area. <br/>
        <br/>

        In <span className="font-bold"> May 2022</span>, I received my B.S. in <span className="font-bold">Business Administration</span> from
        <span className="font-bold"> UC Berkeley's Haas School of Business</span>. Fueled by a curiosity to explore the 
        applications of technology, I continued my education to receive my second Bachelors in <span className="font-bold">Computer Science </span>
        from the <span className="font-bold">College of Engineering</span> in <span className="font-bold">December 2022</span>.
        Since then, I've pursued my passion for programming and design, quickly absorbing new concepts and tackling new challenges with a positive attitude.<br/>
        <br/>
        In my spare time, I love to explore new frameworks and technologies, as well as continuing to compose and perform on the piano. I imagine I'll teach again in my old age.

      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src="/grand-piano.png"
          alt="David portrait"
          width="1000"
          height="1000"
          quality="100"
          priority={true}
        />
        <Image
          src="/programming.png"
          alt="David portrait"
          width="1000"
          height="1000"
          quality="100"
          priority={true}
        />
        </motion.div>
        </div>
    </motion.section>
  );
}
