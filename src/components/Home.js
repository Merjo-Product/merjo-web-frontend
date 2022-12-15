import React from "react";

export function Home(props) {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl" id="about-page">
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          All your{" "}
          <span class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 lg:inline">
            business management
          </span>{" "}
          in one single place.
        </h1>
        <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 font-inter">
          Merjo is E-commerce start-up which aims to simplify the inventory
          management by utilizing the power of Whatsapp Bots. This could help a
          business save time and resources by automating the tasks associated,
          thereby increasing sales and profit.
        </p>
        <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <a
            class="inline-flex items-center justify-center w-full mb-2 bg-blue-600 btn hover:bg-blue-700  btn-lg sm:w-auto sm:mb-0"
            href="#responsive-header"
          >
            <p class="text-white font-poppins">Try our bot</p>
            <svg
              class="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            class="inline-flex items-center justify-center w-full mb-2 bg-blue-600 btn hover:bg-blue-700  btn-lg sm:w-auto sm:mb-0"
            href="#responsive-header"
          >
            <p class="text-white font-poppins">Explore Products</p>
            <svg
              class="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="w-full mx-auto mt-20 text-center md:w-10/12">
        <img
          src="https://images2.imgbox.com/7f/1a/bpnaCxci_o.png"
          alt="Hellonext feedback boards software screenshot"
          class="w-full rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
