import React from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";

export function Features(props) {
  return (
    <>
      <section class="text-gray-600 body-font" id="features-page">
        <h2 class="text-4xl font-extrabold leading-none tracking-normal text-black md:text-6xl md:tracking-tight">
          Features
        </h2>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5 flex-shrink-0">
                <IoChatbubblesSharp size="2rem" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-3 font-poppins">
                  Social Media Integration
                </h2>
                <p class="leading-relaxed text-base font-inter">
                  With the help of Whatsapp Bots, we simplify the whole process
                  of e-commerce in a consolidated way for the ease of both the
                  customer and the business owner.
                </p>
                <a
                  href="/"
                  class="mt-3 text-blue-700 inline-flex items-center font-inter font-bold"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5 flex-shrink-0">
                <MdAutoGraph size="2rem" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-3 font-poppins">
                  Increased Sales
                </h2>
                <p class="leading-relaxed text-base font-inter">
                  Enabling the business owners to reach out to their target
                  customers in a more efficient way, thereby increasing their
                  sales and profits.
                </p>
                <a
                  href="/"
                  class="mt-3 text-blue-700 inline-flex items-center font-inter font-bold"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-5 flex-shrink-0">
                <HiDesktopComputer size="2rem" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-3 font-poppins">
                  Digitalization
                </h2>
                <p class="leading-relaxed text-base font-inter">
                  All the business owners can now easily digitalize their
                  workflow through automation and enter big markets with the
                  help of merjo software.
                </p>
                <a
                  href="/"
                  class="mt-3 text-blue-700 inline-flex items-center font-inter font-bold"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
