import React from "react";
import Navbar from "./Navbar";
import { MapPin } from "lucide-react";
import Works from "./Works";
import Links from "./Links";
import { info } from "../data/info";

const Main = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Navbar />

      <main className="flex w-full flex-col gap-4 tracking-wide">
        <div className="flex w-full  flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">{info.name}</h1>
          <h3 className="flex gap-2 text-gray-400 w-full text-[12px] items-center justify-start">
            <MapPin size={16} />{info.country}
          </h3>
          <h3></h3>
        </div>
        <p className="text-sm leading-relaxed">
          {info.professionalSummary}
        </p>
      </main>

      <Works/>

      <Links/>
    </div>
  );
};

export default Main;
