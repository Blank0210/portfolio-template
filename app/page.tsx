import React from "react";
import Main from "./components/Main";
import Particles from "./hooks/particles";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white flex w-full max-w-3xl items-start justify-start p-6 text-start">
        <Main />
      </div>
    </div>
  );
};

export default page;
