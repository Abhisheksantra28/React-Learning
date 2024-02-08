import React from "react";

const About = () => {
  return (
    <div className="w-full p-20  bg-[#CEEA67] rounded-tl-3xl rounded-tr-3xl text-[#212121]  ">
      <h1 className="text-[3.6vw] w-4/5 leading-none tracking-tighter font-light">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562] ">
        <div className="w-1/2 ">
          <h1 className="text-6xl capitalize">Our Approach:</h1>
          <button className="uppercase flex items-center  gap-10 px-8 py-5 mt-5 bg-zinc-900 rounded-full text-white ">
            Read more
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#afc069] rounded-2xl"></div>
      </div>
    </div>
  );
};

export default About;
