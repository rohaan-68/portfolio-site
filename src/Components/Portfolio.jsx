import React from 'react';
// import { Link } from 'react-router-dom';
import kfc from './1.png';
import netflix from './2.png';
import chatapp from './3.png';
import ecsite from './4.png';
import logfrm from './5.jpg';
import blog from './6.jpg';
const Portfolio = () => {
  const openNewTab = () => {
    window.open('https://kfc-clone0.vercel.app/', '_blank');
  };
  return (
    <section className="mb-24 md:mb-[-20px]" id="portfolio">
      <div class="flex flex-col justify-center items-center">
        <h2 class="mt-[70px] md:mt-[130px] mb-10 text-xl md:text-3xl font-[600] whitespace-nowrap text-white font-sora tracking-[1px] sm:tracking-[3px]">
          <span className="text-[40px] sm:text-[50px] text-blue-500">|</span>{' '}
          PORTFOLIO{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-400 pl-1 rounded-sm">
            PROJECTS
          </span>
        </h2>
        <hr class="w-[200px] md:w-[150px] lg:w-[200px] xl:w-[250px] mx-auto border-gray-900" />
      </div>
      <div class="flex min-h-screen mt-10 md:mt-[-150px] items-center justify-center bg--300/10">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 px-[10%] md:px-[15%] lg:px-0 lg:grid-cols-3 md:w-[950px] md:h-[600px]">
          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={kfc}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[75%] sm:translate-y-[86%] md:translate-y-[79%] lg:translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                KFC Clone
              </h1>

              <button
                onClick={openNewTab}
                class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60"
              >
                LIVE
              </button>
            </div>
          </div>

          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.02] hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={netflix}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[75%] sm:translate-y-[86%] md:translate-y-[79%] lg:translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                Netflix Clone
              </h1>

              <button class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60">
                Soon!
              </button>
            </div>
          </div>
          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.02] hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={chatapp}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[77%] sm:translate-y-[86%] md:translate-y-[79%] lg:translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                Chat App
              </h1>

              <button class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60">
                Soon!
              </button>
            </div>
          </div>
          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.02] hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={blog}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[80%] sm:translate-y-[88%] md:translate-y-[81%] lg:translate-y-[84%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                Blog WebPage
              </h1>

              <button class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60">
                Soon!
              </button>
            </div>
          </div>
          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.02] hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={ecsite}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[82%] sm:translate-y-[88%] md:translate-y-[81%] lg:translate-y-[84%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                E-Commerce
              </h1>

              <button class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60">
                Soon!
              </button>
            </div>
          </div>
          <div class="rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.02] hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={logfrm}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div class="absolute inset-0 translate-y-[79%] sm:translate-y-[88%] md:translate-y-[81%] lg:translate-y-[84%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30px] sm:group-hover:translate-y-[80px]">
              <h1 class="font-poppin text-2xl text-white mb-3 sm:mb-0">
                Login Form
              </h1>

              <button class="rounded-[10px] bg-white text-black font-[700] tracking-[1px] text-[15px] pb-1 pt-2 px-[14px] mt-5 mb-32 font-roboto duration-300 hover:bg-gray-800 hover:text-white shadow shadow-black/60">
                Soon!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
