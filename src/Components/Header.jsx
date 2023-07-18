import React from "react";

const Header = () => {
  return (
    <header className="py-4 bg-black z-50 w-full absolute top-0">
      <div className="container flex justify-between items-center">
        <a href="" className="">
          <div className="text-white text-4xl font-squishyBlue tracking-wide">
            Droppy
          </div>
        </a>
        <div className="hidden justify-start items-start gap-16 lg:inline-flex">
          <div className="cursor-pointer text-white text-xl font-squishyBlue tracking-tight">
            Home
          </div>
          <div className="cursor-pointer text-white text-xl font-squishyBlue tracking-tight">
            About
          </div>
          <div className="cursor-pointer text-white text-xl font-squishyBlue tracking-tight">
            Tekonomics
          </div>
          <div className="cursor-pointer text-white text-xl font-squishyn   tracking-tight">
            Roadmap
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="" className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#E81616" />
              <g clip-path="url(#clip0_1349_293)">
                <path
                  d="M30 14C21.164 14 14 21.164 14 30C14 38.836 21.164 46 30 46C38.836 46 46 38.836 46 30C46 21.164 38.836 14 30 14ZM37.8587 24.9613L35.232 37.3347C35.0387 38.212 34.516 38.4253 33.7867 38.012L29.7867 35.0653L27.8587 36.924C27.7642 37.0463 27.643 37.1453 27.5043 37.2135C27.3656 37.2817 27.2132 37.3172 27.0587 37.3173H27.052L27.336 33.2453L34.7493 26.5493C35.0693 26.2653 34.6773 26.104 34.252 26.388L25.0933 32.156L21.1467 30.924C20.2933 30.6533 20.2693 30.0707 21.3267 29.652L36.748 23.708C37.4653 23.4467 38.0893 23.8787 37.8573 24.9627L37.8587 24.9613Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1349_293">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(14 14)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#E81616" />
              <path
                d="M44.5294 20.8422C43.4442 21.3245 42.2753 21.6493 41.0498 21.797C42.3024 21.0464 43.2596 19.8604 43.7149 18.4454C42.5435 19.1393 41.2467 19.6438 39.8662 19.9145C38.7638 18.7358 37.1864 18 35.4466 18C31.534 18 28.6598 21.6493 29.5432 25.4389C24.5109 25.1855 20.0446 22.7739 17.0572 19.1098C15.47 21.8314 16.2353 25.3946 18.9323 27.1984C17.9406 27.1664 17.008 26.8933 16.191 26.4405C16.1246 29.2458 18.1375 31.8714 21.0511 32.4571C20.1996 32.6884 19.2645 32.7425 18.3147 32.5604C19.0849 34.9671 21.3267 36.7167 23.9745 36.7659C21.4226 38.7641 18.2162 39.6573 15 39.2784C17.6823 40.9985 20.864 42 24.2845 42C35.5352 42 41.889 32.4989 41.5051 23.9772C42.6912 23.1258 43.7173 22.0578 44.5294 20.8422Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
