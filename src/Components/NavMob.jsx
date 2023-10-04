import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import './styles.css';
// import './Navbar.css';
import logo from './logo.jpg';
import navlogo from './navlogo.png';

import { LiaTimesSolid } from 'react-icons/lia';
import { AiOutlineMenu } from 'react-icons/ai';
const NavMob = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute font-josefin top-[0px] rounded-b-[30px] w-full left-0 right-0 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#002966]">
        <ul className="text-center text-xl p-20 pt-10">
          <Link spy={true} smooth={true} to="home">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="about">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="skills">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="portfolio">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              Portfolio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="services">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contact">
            <li className="my-4 py-4 border-b border-blue-900/30 hover:border-none transition-all duration-100 hover:bg-blue-900/60 hover:rounded-lg">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div>{click && content}</div>
      <button
        className="flex relative lg:hidden px-6 text-[1.5rem] "
        onClick={handleClick}
      >
        {click ? <LiaTimesSolid /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};
export default NavMob;
