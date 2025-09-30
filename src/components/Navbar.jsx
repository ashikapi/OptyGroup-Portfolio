import React, { useState, useEffect } from 'react'; // Importing necessary React hooks and icons
import logo from '../images/logo.jpg'; // Import logo image
import { IoIosArrowDown } from "react-icons/io"; // Import arrow icon
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  // mobile menu open state
  const [menuOpen, setMenuOpen] = useState(false);

  // State hooks to handle background color, text color, and scroll position
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');
  const [isAtTop, setIsAtTop] = useState(true);

  // useEffect hook to detect scroll and adjust the navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {  // When scroll position exceeds 100px, change styles
        setBgColor('bg-white');  // Set background color to white
        setTextColor('text-black');  // Set text color to black
        setIsAtTop(false); // Update scroll position state
      } else {
        setBgColor('bg-transparent');  // Reset background color to transparent
        setTextColor('text-white');  // Reset text color to white
        setIsAtTop(true); // Reset scroll position state
      }
    };

    window.addEventListener('scroll', handleScroll); // Add event listener for scroll

    // Initial check for scroll position when the component mounts
    handleScroll();

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-auto flex justify-center items-center fixed z-50 top-0 transition-all ${bgColor}`}>
        {/* Navbar container with dynamic background color */}
        <div className={`w-full h-20 ${textColor}`}>
            <div className='flex md:justify-evenly justify-normal md:gap-0 gap-20 items-center p-4'>
                {/* Logo and brand name */}
                <div className='flex gap-4 items-center'>
                    <img className='md:w-16 w-8 rounded-full' src={logo} alt="Opty Group Logo" />
                    <h1 className='uppercase md:text-2xl text-md font-extrabold font-serif'>opty group</h1>
                </div>

               

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                  <ul className="flex flex-col bg-gray-600 mt-4 rounded-lg text-white font-semibold text-base list-none p-4 gap-3 absolute top-20 right-0 w-full md:w-auto md:hidden transition-all duration-300">
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/home">Home</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="">Company</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="">Portfolio</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/services">Services</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/team">Teams</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact Us</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About Us</NavLink></li>
                    <li><NavLink onClick={() => setMenuOpen(false)} to="/blog">Blogs</NavLink></li>
                  </ul>
                )}

                {/* Desktop Navigation Menu */}
                <div>
                    <ul className='md:flex md:gap-10 font-semibold font-montserrat hidden'>
                        <li className='hover:text-[rgb(245,124,0)]'>
                          <NavLink to={'/home'}>Home</NavLink>
                        </li>

                        {/* Company dropdown with arrow */}
                        <li className="relative group flex items-center">
                          <span className="cursor-pointer hover:text-[rgb(245,124,0)]">Company</span>
                          <span className="ml-2 text-lg transform transition-all group-hover:rotate-180">
                            <IoIosArrowDown />
                          </span>
                          {/* Dropdown menu */}
                          <div className="absolute left-0 hidden bg-gray-700 text-white w-48 group-hover:block mt-52 rounded-md shadow-lg">
                            <ul className="py-2">  
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Option 1</li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Option 2</li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Option 3</li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Option 4</li>
                            </ul>
                          </div>
                        </li>

                        <li className='hover:text-[rgb(245,124,0)]'><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                        <li className='hover:text-[rgb(245,124,0)]'><NavLink to={'/services'}>Services</NavLink></li>

                        {/* Teams menu without dropdown */}
                        <li className="relative group flex items-center">
                          <NavLink to={'/team'}>
                            <span className="cursor-pointer hover:text-[rgb(245,124,0)]">Teams</span>
                          </NavLink>
                        </li>

                        <li className='hover:text-[rgb(245,124,0)]'><NavLink to={'/contact'}>Contact Us</NavLink></li>

                        {/* More dropdown menu */}
                        <li className="relative group flex items-center">
                          <span className="cursor-pointer hover:text-[rgb(245,124,0)]">More</span>
                          <span className="ml-2 text-lg transform transition-all group-hover:rotate-180">
                            <IoIosArrowDown />
                          </span>
                          {/* More dropdown options */}
                          <div className="absolute left-0 hidden bg-gray-700 text-white w-56 group-hover:block mt-52 rounded-md shadow-lg">
                            <ul className="py-2">  
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer"><NavLink to={'/about'}> About Us</NavLink></li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer"><NavLink to={'/blog'}> Blogs </NavLink></li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Help Center</li>
                              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Careers <span className='ml-2 text-red-500 text-sm'>We're Hiring</span></li>
                            </ul>
                          </div>
                        </li>

                        {/* Language switch */}
                        <li><span className='hover:text-[rgb(245,124,0)]'>EN</span> <span className='text-[rgb(245,124,0)]'>|</span>
                        <span className='hover:text-[rgb(245,124,0)]'> BN</span></li>
                    </ul>
                </div>
                 {/* Mobile Menu Button */}
                <div className='md:hidden text-xl' onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
