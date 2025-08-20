import React from "react";
import { Button } from "flowbite-react";

export default function CallToActionAbout() {
  return (
    <div className="dark:bg-black ">
      <div className="mx-auto py-16 sm:px-6 lg:px-8 -mb-12">
        <div className="flex-grow h-0.5 bg-yellow-400 mx-4" />

        <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16 -mb-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            Explore More projects and Source code
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore my GitHub to see a variety of projects that showcase my
            skills across web development, data-driven applications, and
            software engineering. You can also check out the complete source
            code behind this full MERN stack blog to see how each feature was
            built, line by line.
          </p>

          {/* Avatar Stack */}

          {/* CTA Button */}
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-orange-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              View My GitHub
            </button>
          </div>

          {/* Background Gradient Circle */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient-circle)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="gradient-circle">
                {/* Bright yellow center */}
                <stop offset="0%" stopColor="#FFD700" />
                {/* Smooth transition to a softer shade */}
                <stop offset="50%" stopColor="#FFC300" />
                {/* Darker golden edge */}
                <stop offset="100%" stopColor="#FFB000" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
