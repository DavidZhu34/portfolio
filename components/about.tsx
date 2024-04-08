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
        Before I dove into a life of development, I taught improvisational theory piano at UC Berkeley, kickstarted a 
        band, and performed in venues around the Bay Area. <br/>
        <br/>

        In <span className="font-bold"> May 2022</span>, I received my B.S. in <span className="font-bold">Business Administration</span> from
        <span className="font-bold"> UC Berkeley's Haas School of Business</span>. I continued my education to receive my second Bachelors in <span className="font-bold">Computer Science </span>
        from the <span className="font-bold">College of Engineering</span> in <span className="font-bold">December 2022</span>.
        Since then, I've interned at startups around the Bay Area, working in both Fullstack and Frontend Development roles.<br/>
        <br/>
        In my spare time, I love to explore new frameworks and technologies. I'm currently building web apps using Next.js and Tailwind.css (such as this portfolio)
        and exploring the usage of AI integrations. 
        <br/>
        <br/>
        I still compose and play piano around the area occassionally. I imagine I'll teach again in my old age.

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
