import React from "react";
import Logo1 from "../assets/logo1.png";
import Pattern1 from "../assets/pattern1.png";
import Pattern2 from "../assets/pattern2.png";

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-16 relative">
      <img src={Pattern1} alt="" className="absolute bottom-0 w-[15rem]" />
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex  z-10 flex-col gap-5">
          <h1 className="text-white text-7xl md:text-8xl font-squishyBlue ">
            Welcome To Droppy
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading{" "}
          </p>
          <a
            href=""
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-600 shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7">
                  BUY DROPPY
                </div>
              </div>
            </div>
          </a>
        </article>
        <img src={Logo1} alt="" className=" z-10" />
      </div>
      <img src={Pattern2} className="w-full z-10 absolute bottom-0" alt="" />
    </section>
  );
};

export default Hero;
