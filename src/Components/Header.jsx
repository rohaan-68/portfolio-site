import React, { useState, useEffect } from 'react';
import logo from './navlogo.png';
import Navbar from './Navbar';
import NavMobile from './NavMob';

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'navbar h-[85px]' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-[150px] lg:w-[200px] xl:w-[250px] lg:pl-[50px] xl:pl-[100px] mt-[15px]"
          />
        </a>
        {/* Nav */}
        <div className="mx-auto hidden md:block">
          <Navbar />
        </div>
        {/* NavMobile */}
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
