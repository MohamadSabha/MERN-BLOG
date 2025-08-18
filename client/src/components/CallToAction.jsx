import React from "react";
import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <>
      {/* First CTA */}

      {/* <div className="flex border border-accent p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">
            Want to learn HTML, CSS and JavaScript by building fun and engaging
            projects?
          </h2>
          <p className="text-gray-500 my-2">
            Check our 100 js projects website and start building your own
            projects
          </p>
          <a
            href="https://mhdsabha.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800">
              Mhd's Tech hub
            </Button>
          </a>
        </div>
        <div className="flex-1 p-7">
          <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div> */}
      {/* second CTA */}
      <div className="relative bg-black dark:bg-gray-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-yellow-400"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>

            <p className="mb-6 text-base text-gray-300 md:text-lg">
              Get the latest updates on web development, data science, and tech
              trends — straight to your inbox.
            </p>

            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-black dark:text-white transition duration-200 border-2 border-transparent rounded md:mr-2 md:mb-0 bg-white dark:bg-gray-800 focus:border-yellow-400 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form>

            <p className="max-w-md mb-10 text-xs tracking-wide text-gray-400 sm:text-sm sm:mx-auto md:mb-16">
              We respect your privacy. Unsubscribe at any time.
            </p>

            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-yellow-400 duration-300 transform border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
