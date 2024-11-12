import React from "react";
import Logo2 from "../assets/logo3.png";

const About = () => {
  return (
    <section className="w-full py-16 relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={Logo2} alt="" />
        <article className="flex  z-10 flex-col gap-5">
          <h1 className="text-white text-5xl font-squishyBlue ">
            About WoofHopsi
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
            WoofHopsi is a playful and innovative meme project featuring an adorable husky character designed to bring smiles and joy to the digital world. WoofHopsi captures the essence of fun and positivity, combining catchy visuals with relatable,
            humorous content.
          </p>
          <a
            href="https://t.me/WoofHopsi"
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-600 shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7">
                  JOIN TELEGRAM
                </div>
              </div>
            </div>
          </a>
           <a
            href="https://woofhopsi.gitbook.io/woofhopsi-docs"
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-600 shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7">
                  DOCS
                </div>
              </div>
            </div>
          </a>
           <a
            href=""
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-600 shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7">
                  Stake $WHO
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
