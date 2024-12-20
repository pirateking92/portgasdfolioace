"use client";
import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

export default function MainSection() {
  const words = ["Matt", "a Software Engineer", "a cool guy"];
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 flex flex-col items-center sm:items-start sm:text-left text-center justify-self-center sm:justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-3xl lg:text-8xl lg:leading-tight font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <FlipWords
              words={words}
              className="text-white sm:text-3xl md: text-3xl lg:text-8xl lg:leading-tight font-semibold"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            A fullstack engineer based in London
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/Matthew Doyle SWEng. CV.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/propic.png"
              alt="hero image"
              className="w-full h-full"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
