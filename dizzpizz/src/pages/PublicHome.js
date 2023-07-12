import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center ">
      <p className="text-[#fac564] text-[30px] landing-title">Welcome</p>
      <h1 className="uppercase text-[#fff] leading-[1.5] text-[30px] tracking-[1px] font-normal">
        We cooked your desired Pizza Recipe
      </h1>
      <p className="text-[18px] font-light text-white leading-[1.5] mb-4">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </p>
      <button className="bg-[#fac564] border border-[#fac564] text-[#000] text-[13px] p-[1rem]">
        Order Now
      </button>
    </div>
  );
};

export default Home;
