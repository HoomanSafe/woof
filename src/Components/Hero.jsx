import React from "react";
import Logo1 from "../assets/logo1.png";
import Pattern1 from "../assets/pattern1.png";
import Pattern2 from "../assets/pattern2.png";
import { BiCopy } from "react-icons/bi";

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
            Get ready for a crypto revolution like no other. Droppy is here to
            shake things up with its 1% tax and a total supply of 69,000,000
            tokens. But what sets Droppy apart? We bring the fun! Join us for
            hilarious adventures, exclusive events, and a community that's
            cooler than an iceberg. Get ready to drop into Droppy and experience
            crypto like never before. Let's rock the blockchain!
          </p>
          <button
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
            onClick={() => {
              navigator.clipboard
                .writeText("0x151bFa5a0F0e11FFCc86d3BACC5faB5081Ff0AdD")
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
