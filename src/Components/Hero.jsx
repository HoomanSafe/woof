import React from "react";
import Logo1 from "../assets/logo4.png";
import Pattern1 from "../assets/banner.jpeg";
import Pattern2 from "../assets/pattern2.png";
import { BiCopy } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-16 relative">
      <img src={Pattern1} alt="" className="absolute bottom-0 w-[15rem]" />
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex  z-10 flex-col gap-5">
          <h1 className="text-white text-7xl md:text-8xl font-squishyBlue ">
            Welcome To WoofHopsi
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
            WoofHopsi is a playful and innovative meme project featuring an adorable husky character designed to bring smiles and joy to the digital world.
            WoofHopsi captures the essence of fun and positivity, combining catchy visuals with relatable, humorous content.
          </p>
          <button
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
            onClick={() => {
              navigator.clipboard
                .writeText("0x00000000000000000000000")
                .then(() => {
                  alert("Contract Copied");
                });
            }}
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-600 shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white flex items-center gap-3 text-xl font-normal leading-7">
                  COPY CA <BiCopy />
                </div>
              </div>
            </div>
          </button>
        </article>
        <img src={Logo1} alt="" className=" z-10" />
      </div>
      <img src={Pattern2} className="w-full z-10 absolute bottom-0" alt="" />
    </section>
  );
};

export default Hero;
