import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
const Services = () => {
  return (
    <section
      className="relative text-white bg-gradient-to-r pb-16 from-blue-900/30 to-blue-800/30"
      id="services"
    >
      {/* <img
        src="https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635ace20327dab7ed39658ec_horizontal%20(95).svg"
        alt=""
        class="absolute  inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      {/* <img src="" /> */}
      <div class="flex flex-col justify-center items-center">
        <h4 class="font-bold text-xl text-white px-3 pt-1 shadow-[0_1px_5px_1px_rgba(35,156,220,0.1)] bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mt-16 mb-1 font-josefin">
          SERVICES
        </h4>
        <h2 class="mt-3 mb-5 text-2xl font-[600] font-serif">
          What Can I Do For You?
        </h2>
        <p class=" text-gray-300 mb-8 text-center font-serif md:tracking-[1px]">
          Here are some of the services that I offer when it comes to web
          development and business.
        </p>
      </div>
      {/* <hr class="w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] mx-auto mb-[65px] border-blue-300" /> */}
      <hr class="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] mb-[65px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100" />
      {/* Services ended */}
      <div class="sm:flex justify-center items-center mt-8 sm:px-0 md:px-[10%] xl:px-[20%]">
        <div class="relative mx-auto sm:mr-5 mb-16 sm:mb-0 w-80  xl:h-[320px] flex-col rounded-xl bg-blue-950/10 bg-clip-border hover:bg-blue-950/20 hover:shadow-2xl text-white shadow-md duration-300 hover:scale-[1.1]">
          <div class="flex -mt-6 h-[100px] w-[100px] mx-auto overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-300 to-blue-400">
            <FaGlobe className="text-gray-200 300 mx-auto text-[70px] my-auto " />
            <img src="" alt="" />
          </div>
          <div class="p-6">
            <h5 class="mb-[26px] sm:mb-6 mt-5 sm:mt-0 block font-serif text-xl xl:text-[22px] text-center font-semibold leading-snug tracking-normal text-white antialiased">
              Website Design
            </h5>
            <p class="block font-roboto text-gray-300 text-sm xl:text-[15px] xl:text-base font-light leading-relaxed mt-5 antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div class="p-6 pt-2">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg hover:bg-blue-300 duration-300 bg-white py-3 px-6 text-center flex mx-auto font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/10 transition-all hover:shadow-lg hover:shadow-gray-500/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="relative mx-auto mb-16 sm:mb-0 w-80 xl:h-[320px] flex-col sm:mr-5 rounded-xl bg-blue-950/10 bg-clip-border hover:bg-blue-950/20 hover:shadow-2xl text-white shadow-md duration-300 hover:scale-[1.1]">
          <div class="flex -mt-6 h-[100px] w-[100px] mx-auto overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-300 to-blue-400">
            <FaCode className="text-gray-200 300 mx-auto text-[70px] my-auto " />
            <img src="" alt="" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-serif text-xl xl:text-[22px] text-center font-semibold leading-snug tracking-normal text-white antialiased">
              Web Development
            </h5>
            <p class="block font-roboto text-gray-300 text-sm xl:text-[15px] xl:text-base font-light leading-relaxed mt-5 antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div class="p-6 pt-2">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg hover:bg-blue-300 duration-300 bg-white py-3 px-6 text-center flex mx-auto font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/10 transition-all hover:shadow-lg hover:shadow-gray-500/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="relative mx-auto w-80 xl:h-[320px] flex-col rounded-xl bg-blue-950/10 bg-clip-border hover:bg-blue-950/20 hover:shadow-2xl text-white shadow-md duration-300 hover:scale-[1.1]">
          <div class="flex -mt-6 h-[100px] w-[100px] mx-auto overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-300 to-blue-400">
            <FaShoppingCart className="text-gray-200 300 mx-auto text-[70px] my-auto " />
            <img src="" alt="" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-serif text-xl xl:text-[22px] text-center font-semibold leading-snug tracking-normal text-white antialiased">
              Advertising & SEO
            </h5>
            <p class="block font-roboto text-gray-300 text-sm xl:text-[15px] xl:text-base font-light leading-relaxed mt-5 antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div class="p-6 pt-2">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg py-3 px-6 text-center flex mx-auto font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/10 transition-all hover:shadow-lg hover:bg-blue-300 duration-300 bg-white hover:shadow-gray-500/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr class="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] mx-auto mt-[65px] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100" />
    </section>
  );
};

export default Services;
