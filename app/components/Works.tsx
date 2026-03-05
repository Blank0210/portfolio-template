import React from "react";
import { info } from "../data/info";

type WorkType = {
  id: number,
  title: string,
  techStack: string,
  description: string
}

const Works = () => {
  return (
    <div>
      <h1 className="text-[24px] flex gap-2 font-semibold">
        <span className="text-[#17ebe0] font-extrabold">*</span> works
      </h1>

      {info.works.map((work: WorkType) => (
        <div key={work.id} className="mt-4 gap-6 flex flex-col w-full">
          <div className="space-y-1 flex w-full flex-col gap-1">
            <h3 className="text-xl font-medium">
              {work.title}
            </h3>
            <p className="text-sm text-[#17ebe0]">{work.techStack}</p>
            <p className="text-sm text-gray-400">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
