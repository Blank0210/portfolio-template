import React from "react";
import Navbar from "./Navbar";
import { LaptopMinimal, MapPin } from "lucide-react";
import Works from "./Works";
import Links from "./Links";
import { info } from "../data/info";
import Skills from "./Skills";
import Publication from "./Publication";

const Main = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-1">
      <main className="flex w-full flex-col gap-4 tracking-wide">
        <div className="flex w-full  flex-col gap-2">
          <h1 className="text-4xl font-extrabold tracking-tight">{info.name}</h1>

          <div className="flex items-start justify-start gap-5">
            <h3 className="flex text-[#17ebe0] text-[12px] gap-2 items-center">
              <LaptopMinimal size={16} />
              {info.role}
            </h3>

            <hr className="border border-gray-400 h-4 items-center flex justify-center" />

            <h3 className="flex text-[#17ebe0] text-[12px] gap-2 items-center">
              <MapPin size={16} />{info.country}
            </h3>
          </div>
          <h3></h3>
        </div>
        <p className="text-sm leading-relaxed">
          {info.professionalSummary}
        </p>
      </main>

      <Skills />
      <Works />
      <Publication />
      <Links />
    </div>
  );
};

export default Main;
