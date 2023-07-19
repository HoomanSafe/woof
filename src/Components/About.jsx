import React from "react";
import Logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <section className="w-full py-16 relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={Logo2} alt="" />
        <article className="flex  z-10 flex-col gap-5">
          <h1 className="text-white text-5xl font-squishyBlue ">
            About Droppy
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
            Prepare yourself for a crypto uprising like never seen before!
            Droppy has arrived to disrupt the scene with its 1% tax and a grand
            total of 69,000,000 tokens. But what makes Droppy truly exceptional?
            We bring the party! Come along for uproarious escapades, exclusive
            gatherings, and a community that's cooler than an arctic breeze.
            Gear up to dive into Droppy and encounter a whole new world of
            crypto excitement. Let's make the blockchain groove!
          </p>
          <a
            href=""
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
        </article>
      </div>
    </section>
  );
};

export default About;
