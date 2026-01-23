'use client'
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Links = () => {
  return (
    <div>
      <h1 className="text-[24px] flex gap-2 font-semibold">
        <span className="text-emerald-600 font-extrabold">*</span> links
      </h1>

      <div className="flex gap-8 mt-4 text-sm text-gray-400">
        <motion.a
          href="https://x.com/reconpro007"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-emerald-600"
          whileHover="hover"
          initial="initial"
        >
          x.com
          <motion.span
            variants={{
              initial: {
                opacity: 0,
                x: 0,
                y: 0,
              },
              hover: {
                opacity: 1,
                x: 2,
                y: -2, 
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              },
            }}
            className="inline-flex"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/rushendra-varma-jampana-5b5728250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-emerald-600"
          whileHover="hover"
          initial="initial"
        >
          linkedin
          <motion.span
            variants={{
              initial: {
                opacity: 0,
                x: 0,
                y: 0,
              },
              hover: {
                opacity: 1,
                x: 2,
                y: -2, 
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              },
            }}
            className="inline-flex"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </motion.a>
      </div>
    </div>
  );
};

export default Links;
