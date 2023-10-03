import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './styles.css';
import './Navbar.css';
import logo from './logo.jpg';
import navlogo from './navlogo.png';

const Navbar = () => {
  const [navbar, setNavbarColor] = useState(false);

  const scroll = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener('scroll', scroll);

  return (
    <div
      className={`${
        navbar ? 'navbar' : ''
      } fixed w-full text-white md:px-[7%] lg:px-[17%] z-50`}
    >
      <div className="flex items-start">
        <Link
          to="home"
          smooth={true}
          duration={200}
          className="cursor-pointer logo"
        >
          <img src={navlogo} alt="" className="w-[150px] mt-[-19px]" />
        </Link>
        <div className="md:flex mt-[35px] mx-auto font-josefin text-[16px] space-x-12 hidden">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-blue-300"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-blue-300"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-blue-300"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Header = () => {
  return <Navbar />;
};
export default Header;
