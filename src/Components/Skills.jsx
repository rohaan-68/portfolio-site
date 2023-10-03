import React from 'react';
import './styles.css';
import ihtml from './ihtml.svg';
import icss from './css.svg';
import tailwind from './tailwind.svg';
import bootstrap from './bootstrap.svg';
import js from './js.svg';
import react from './react.svg';
import node from './node.svg';
import express from './express.svg';
import typesct from './typescript.svg';
import git from './git.svg';
import python from './python.svg';
import flutter from './flutter.svg';
import wordpres from './wordpress.svg';

const Skill = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-800/30 to-blue-900/30 pb-[25%] md:pb-[10%] max-h-[120vh] xl:max-h-[80vh]"
      id="skills"
    >
      <div className="flex flex-col text-center">
        <div class="">
          <h2 class="mt-[70px] lg:mt-[70px] mb-10 md:mb-4 text-3xl md:text-[40px] font-[600] text-white font-sora">
            <span className="text-[35px] md:text-[45px] text-blue-500">
              {'<'}
            </span>
            Skills{' />'}
          </h2>
          <p className="mt-6 md:mt-0 lg:mt-6 lg:mb-[20px] px-[5%] sm:px-0 text-md sm:text-lg sm:leading-8 text-gray-300">
            I believe myself to be an enthusiastic learner. Here are a couple of
            languages and tools I've worked with.
          </p>
        </div>
      </div>
      <div className="inner pt-[20px] overflow-hidden flex justify-center items-center text-white">
        <div className="container text-center mt-6 md:mt-[10px] lg:mt-[-25px] xl:mt-[-25px] grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-[1rem] md:gap-[2rem] text-[1.2rem] px-[6%] md:px-[5%] xl:px-[5%]">
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                HTML
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={ihtml}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[2px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                CSS
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={icss}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[2px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                Tailwind
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={tailwind}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[2px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                Bootstrap
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={bootstrap}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[1px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Proficient
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                JavaScript
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={js}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[30px] sm:group-hover:translate-x-[16px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                TypeScript
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={typesct}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[30px] sm:group-hover:translate-x-[16px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                ReactJS
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={react}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[30px] sm:group-hover:translate-x-[16px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                NodeJS
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={node}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[0px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Beginner
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                ExpressJS
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={express}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[1px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Beginner
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                Python
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={python}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[0px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Beginner
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                Flutter
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={flutter}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[0px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Beginner
                </span>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title flex flex-col items-center p-[0.5rem] mb-[0.5rem]">
              <h3 className="m-[0.5rem] text-[15px] md:text-xl font-bold">
                WordPress
              </h3>
              <hr class="w-[65px] my-2 mx-auto border-gray-100" />
              <div className="group">
                <img
                  src={wordpres}
                  alt=""
                  className="w-[70px] sm:w-[100px] cursor-pointer group-hover:translate-x-[15px] sm:group-hover:translate-x-[2px]"
                />
                <span className="hidden py-1 px-3 font-[700] text-[16px] font-com bg-gradient-to-r mt-2 from-blue-300 to-blue-500 text-black shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-3xl group-hover:block">
                  Proficient
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
