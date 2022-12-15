import React from "react";

export function Pricing(props) {
  return (
    <section class="text-gray-600 body-font overflow-hidden" id="pricing-page">
      <div class="container px-5 py-24 mx-auto ">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="mb-2 text-4xl font-extrabold leading-none tracking-normal text-black md:text-6xl md:tracking-tight">
            Pricing
          </h2>
          <br />
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 font-inter">
            We offer two economical plans for the entities to choose from. The
            plans are designed to suit the needs of the business owners. For
            more details, please contact us.
          </p>
        </div>
        <div class="flex flex-wrap -m-2 justify-center">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest title-font mb-1 font-bold font-poppins">
                INDIVIDUAL
              </h2>
              <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none font-poppins">
                Free
              </h1>
              <p class="flex items-center text-gray-600 mb-2 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Limited Bot Access
              </p>
              <p class="flex items-center text-gray-600 mb-2 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Listing of Products
              </p>
              <p class="flex items-center text-gray-600 mb-6 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Customer Support 24/7
              </p>
              <button class="flex items-center mt-auto text-white bg-blue-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded">
                Choose Plan
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest title-font mb-1 font-bold font-poppins">
                ENTERPRISE
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 font-poppins">
                <span>₹ 3500</span>
                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p class="flex items-center text-gray-600 mb-2 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited Bot Access
              </p>
              <p class="flex items-center text-gray-600 mb-2 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Listing of Products
              </p>
              <p class="flex items-center text-gray-600 mb-2 font-inter">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Analytics and Sales Boost Tools
              </p>

              <button class="flex items-center mt-auto text-white bg-blue-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded">
                Choose Plan
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
