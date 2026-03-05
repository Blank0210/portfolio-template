'use client'
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { info } from "../data/info";

const Links = () => {
  return (
    <div>
      <h1 className="text-[24px] flex gap-2 font-semibold">
        <span className="text-[#86cecb] font-extrabold">*</span> links
      </h1>

      <div className="flex gap-8 mt-4 text-sm text-gray-400">
        {info.socials.map((link) => (
          <motion.a
            key={link.title}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#17ebe0]"
            whileHover="hover"
            initial="initial"
          >
            {link.title}
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
        ))}
      </div>
    </div>
  );
};

export default Links;
