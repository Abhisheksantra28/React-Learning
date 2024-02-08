import React from "react";

const Cards = () => {
  return (
    <div className="w-full flex gap-5 h-screen px-20 items-center bg-zinc-900">
      <div className="card-container h-[55vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#CEEA67]">
            &copy;2021-2025
          </button>
        </div>
      </div>

      <div className="card-container flex gap-5 h-[55vh] w-1/2">
        <div className="card w-1/2 flex items-center justify-center relative h-full rounded-xl bg-[#212121]">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute uppercase tracking-tighter px-5 py-1 border-2 rounded-full left-6 bottom-6 text-sm ">
            RATING 0.5 ON CLUTCH
          </button>
        </div>
        <div className="card w-1/2 flex items-center justify-center relative h-full rounded-xl bg-[#212121]">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase tracking-tighter px-5 py-1 border-2 rounded-full left-6 bottom-6 text-sm ">
            business bootcamp almuni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
