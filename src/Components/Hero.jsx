import React from 'react';
import Icons from './Icons';
import logo from './logo.jpg';
import './styles.css';
const Hero = () => {
  return (
    <section id="home" className="md:h-[100vh]">
      <div className="container8 flex flex-col-reverse md:flex-row md:px-[100px] lg:px-[112px] xl:px-[200px] items-center text-white">
        <div className="flex flex-col mb-32 md:w-2/4 mx-auto md:mt-32">
          <h2 className="max-w-md font-josefin text-blue-500 text-1xl text-center md:text-left mx-auto md:mx-0 tracking-[2px] mb-4 lg:text-2xl mt-16 xl:mt-[100px]">
            | Muhammad Rohaan
          </h2>
          <h1 className="font-[600] lg:max-w-[600px] font-serif text-white text-2xl leading-7 text-center md:text-left mx-auto md:mx-0 mb-4 xl:text-5xl lg:text-4xl">
            Building utilitarian and functional websites with
          </h1>

          <p className="text-gray-300 mx-auto md:mx-0 text-[16px] text-center md:text-left tracking-[1px] xl:font-[500]">
            HTML, CSS, Tailwind, JS, and ReactJS!
          </p>
          <div className="lg:w-[280px] lg:h-[90px] w-[200px] h-[75px] flex mx-auto justify-center md:mx-0 md:justify-start">
            <a
              href="#"
              className="px-6 pt-2 lg:pt-3 mt-8 lg:text-[23px] text-[18px] font-josefin text-black bg-white rounded-full font-[600] transition duration-200 ease-out hover:ease-in border hover:border-black hover:bg-blue-600 hover:text-white md:block"
            >
              Contact me
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="box w-[280px] mx-auto md:w-[250px] lg:w-[350px] xl:w-[400px] md:mt-[0px] md:ml-[60px] lg:ml-[80px] xl:mt-[80px] md:mr-[-100pxx] lg:mr-[-150pxx] xl:mr-[-250pxx] mt-[200px]">
          {/* <div className="box"> */}
          <img src={logo} alt="" />
          {/* </div> */}
        </div>
      </div>
      <Icons />
    </section>
  );
};
export default Hero;
