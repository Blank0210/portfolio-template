import React from "react";
import { info } from "../data/info";
import { skills } from "../data/info";
import Works from "./Works";

const Skills = () => {
    return (
        <div>
            <h1 className="text-[24px] flex gap-2 font-semibold">
                <span className="text-[#17ebe0] font-extrabold">*</span> skills
            </h1>

            {/* Skills boxes (exclude headings per request) */}
            <div className="mt-4 flex flex-wrap gap-3">
                {skills.programmingLanguages.map((lang) => (
                    <div
                        key={lang}
                        className="relative bg-[#1a1a1a] border-2 border-neutral-700/80
    rounded-lg 
    px-2 py-1 
    text-[12px] 
    text-neutral-400 
    shadow-[inset_1px_1px_2px_rgba(255,255,255,0.08),_4px_4px_10px_rgba(0,0,0,0.2)]
    hover:shadow-[inset_1px_1px_2px_rgba(134,206,203,0.08),_0px_0px_10px_rgba(134,206,203,0.25)]
    hover:border-[#86cecb]
    hover:text-[#86cecb]
    duration-300
    ease-in-out
    transition-all">
                        {lang}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
