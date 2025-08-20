import React from "react";
import { Button } from "flowbite-react";

export default function CallToActionProjects() {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="dark:bg-primary bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
            }}
          ></div>
        </div>

        {/* Right Side - Content */}
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none  lg:rounded-lg">
          <h2 className="text-3xl text-white font-bold">
            See More of My <span className="text-accent">Work</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore additional projects, including full MERN stack applications,
            and dive into the source code to see how each project is built from
            the ground up.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="dark:bg-white text-primary  px-5 py-3 font-semibold rounded"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
