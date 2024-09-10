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
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-40 bg-gray-100 px-20 py-20 rounded-lg">
      <p className="leading-8 mb-3 text-lg">
      I'm a Business Administration and Computer Science graduate from UC Berkeley, as well as an improvisational pianist. <br/><br/>
During my undegraduate studies, I founded a class where I taught music composition and improvisational theory. Learning to improvise and engage with an audience has fueled my passion in using creativity and data to understand people and their needs. 
<br/><br/>
Whether in business or the arts, I am endlessly learning and creating something new, applying my lived experiences as an artist, an entrepreneur, a programmer, and a student.
<br/><br/>
I still perform around the Bay Area from time to time. I imagine I'll teach again in my old age.
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
          width="600"
          height="600"
          quality="100"
          priority={true}
        />
        <Image
          src="/programming.png"
          alt="David portrait"
          width="600"
          height="600"
          quality="100"
          priority={true}
        />
        </motion.div>
        </div>
    </motion.section>
  );
}
