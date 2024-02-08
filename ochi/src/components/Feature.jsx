import React from "react";
import FeatureImage02 from "../assets/FeatureImage02.jpg";
import FeatureImage01 from "../assets/FeatureImage01.png";

const Feature = () => {
  return (
    <div className="h-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-[4vw]">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>

      <div className=" px-20">
        <div className="cards flex gap-[1vw] w-full mt-10">
            
          <div className="card-container relative  w-1/2 h-[70vh] ">
            <h1 className="absolute left-full top-1/2  -translate-x-1/2 -translate-y-1/2  text-8xl leading-none tracking-tighter font-semibold text-[#CEEA67]">FYDE</h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={FeatureImage01}
                alt=""
              />
            </div>
          </div>
          <div className="card-container relative  w-1/2 h-[70vh]">
          <h1 className="absolute right-full top-1/2  translate-x-1/2 -translate-y-1/2  text-8xl leading-none tracking-tighter font-semibold text-[#CEEA67]">VISE</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={FeatureImage02}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
