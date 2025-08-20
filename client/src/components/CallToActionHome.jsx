import React from "react";
import { Button } from "flowbite-react";

export default function CallToActionHome() {
  return (
    <div className=" w-full relative bg-white dark:bg-black">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-yellow-400"
          preserveAspectRatio="none"
        >
          {" "}
          <defs>
            <linearGradient id="red-to-yellow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff0000" /> {/* red */}
              <stop offset="100%" stopColor="#FFD700" /> {/* yellow */}
            </linearGradient>
          </defs>
          <path
            fill="url(#red-to-yellow)"
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
          ></path>
        </svg>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl sm:leading-none">
            Want More Content?{" "}
          </h2>

          <p className="mb-6 text-base text-gray-300 md:text-lg">
            "Discover in-depth articles on web development, data science,Machine
            Learning, and modern software engineering on my personal website."
          </p>

          <form className="flex flex-col items-center w-full  ">
            <a
              href="/"
              className="inline-flex items-center justify-center  h-12 px-6 tracking-wide  transition duration-200  shadow-md md:w-auto w-full bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 text-black dark:text-primary font-bold rounded-md text-sm focus:shadow-outline focus:outline-none"
            >
              MHD's Tech Hub
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
