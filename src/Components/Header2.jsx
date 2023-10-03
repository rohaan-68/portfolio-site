import React, { useState } from 'react';
import navlogo from './navlogo.png';

const Header2 = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Portfolio', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Contact', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  const [navbarColor, setNavbarColor] = React.useState('black');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor('white');
    } else {
      setNavbarColor('black');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="shadow-md w-full fixed top-0 left-0 "
      style={{ backgroundColor: navbarColor }}
    >
      <div className="md:flex items-center justify-between md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <img src={navlogo} alt="" className="w-[150px]" />
        </div>
        <ul className="md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href="{link.link}"
                className="text-blue-300 hover:text-blue-100 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header2;
