"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center justify">
          <span>TypeScript&nbsp;</span>
          <Image
            src="/images/typescript.png"
            alt="TypeScript"
            width={24}
            height={24}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>Go&nbsp;</span>
          <Image
            src="/images/go.png"
            alt="Go"
            width={34}
            height={34}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>Python&nbsp;</span>
          <Image
            src="/images/python.png"
            alt="Python"
            width={22}
            height={22}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>Express&nbsp;</span>
          <Image
            src="/images/express.png"
            alt="Express"
            width={24}
            height={24}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>PostgreSQL&nbsp;</span>
          <Image
            src="/images/postgresql.png"
            alt="Postgres SQL"
            width={24}
            height={24}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>React&nbsp;</span>
          <Image
            src="/images/react.png"
            alt="React"
            width={24}
            height={24}
            className="ml-2"
          />
        </li>
        <li className="flex items-center justify">
          <span>Next.js&nbsp;</span>
          <Image
            src="/images/nextjs.png"
            alt="React"
            width={24}
            height={24}
            className="ml-2"
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>Makers Tech</b>-{" "}
          <i>Software Development Track, Jan 2024 - May 2024</i>
        </li>
        <p>
          - 16-week intensive bootcamp, focusing on Python, Go, JavaScript, Git,
          Swift. <br />- Practised test-driven development (TDD) and
          object-oriented programming.
          <br /> - Enhanced pair programming skills through regular
          collaborative exercises. <br />- Worked in Agile scrum environments to
          improve, extend, and debug legacy code.
        </p>
        <li>University of York, MA Applied Linguistics</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Harmony Hackathon 1st Place</li>
        <p>
          Took part in my first hackathon for Harmony, a data engineering
          company looking into improving mental health questionnaires and
          research across the world
        </p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // makes sure it only happens once
    threshold: 0.1, // adjust the threshold to control when the animation starts
  });

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // add in useEffect code
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
          <Image
            src="/images/IMG_5768.png"
            alt="Royal Parks Matt"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              A Junior Software Engineer in London, I bring a blend of technical
              acumen and cross-industry expertise. Having spent 7 years teaching
              EFL in South Korea, Japan, and the UK, 1 year as an HR Recruiter
              in Tokyo, I possess a unique perspective that enhances my approach
              to software development. Having completed the prestigious Makers
              Software Development Course in May 2024, I am eager to leverage my
              newfound skills and demonstrate my adaptability across continents,
              industries and cultures. Let&apos;s connect and explore how I can
              contribute to your team. Looking forward to speaking with you!
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
