"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
    </section>
  );
}
