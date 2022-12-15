import React from "react";

export function Workflow(props) {
  return (
    <div className="flex flex-col items-center justify-center bg-white-800 p-6 shadow-none rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <h2 class="mb-2 text-4xl font-extrabold leading-none tracking-normal text-black md:text-6xl md:tracking-tight">
          How it works?
        </h2>
        <br />
      </div>
      <div class="w-1/2">
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pb-8 ">
            <p class="mb-2 text-xl font-bold text-black-600 text-left font-poppins">
              Step 1
            </p>
            <p class="text-gray-700 text-left font-inter">
              All the business owners will be required to register on the portal
              provided to get the access to the Merjo bot. The registration
              process is very simple and can be done in a few minutes.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pb-8 ">
            <p class="mb-2 text-xl font-bold text-black-600 text-left font-poppins">
              Step 2
            </p>
            <p class="text-gray-700 text-left font-inter">
              After the registration, the business owners will be required to
              provide necessary details about their product to the Merjo bot.
              The customer will be able to see the product details and can place
              the order.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pb-8 ">
            <p class="mb-2 text-xl font-bold text-black-600 text-left font-poppins">
              Step 3
            </p>
            <p class="text-gray-700 text-left font-inter">
              After the order is placed, the business owner will be notified and
              the customer will receive the order details and will be able to
              track the order.
            </p>
          </div>
        </div>

        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="pt-1">
            <p class="mb-2 text-lg font-bold text-black-600 font-poppins">
              Done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
