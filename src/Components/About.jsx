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
            Pepe and Toad join forces on an epic space odyssey to colonize
            Mars.An unforgettable Mars mission with the most memeable memecoin
            in existence. Pepe and Toad was birthed to highlight the
            collaboration between Elon Musk and Pepe. Two people on the same
            mission to Mars. Pepe and Toad is here to bring back the hype which
            memecoins always deserved. Zero taxes
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
