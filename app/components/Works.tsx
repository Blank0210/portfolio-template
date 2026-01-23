import React from "react";

const Works = () => {
  return (
    <div>
      <h1 className="text-[24px] flex gap-2 font-semibold">
        <span className="text-emerald-600 font-extrabold">*</span> works
      </h1>

      <div className="mt-4 gap-6 flex flex-col w-full">
        <div className="space-y-1 flex w-full flex-col gap-1">
          <h3 className="text-sm font-medium">
            OSINT POI & Digital Footprint Analysis Report
          </h3>
          <p className="text-sm text-gray-400">
            An OSINT case study showcasing identity resolution and digital
            footprint analysis using open-source intelligence methodologies.
          </p>
        </div>

        <div className="space-y-1 flex w-full flex-col gap-1">
          <h3 className="text-sm font-medium">Geolocation Analysis Report</h3>
          <p className="text-sm text-gray-400">
            An OSINT-based geolocation investigation identifying the origin of
            media through spatial analysis and open-source data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
