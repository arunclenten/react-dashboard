import React, { useState } from 'react';
import { HiSearch, HiMenuAlt3 } from 'react-icons/hi';
import { FiMessageSquare, FiBell } from 'react-icons/fi';
import { RiSettings4Line } from 'react-icons/ri';
import { SlEnvolope } from "react-icons/sl";
import { Link } from 'react-router-dom';
import profilePic from '../assets/aruncl.jpeg'; 

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white flex items-center justify-between px-4 py-3 md:px-6 md:py-4 z-10">
      <div className="flex items-center">
        <button
          onClick={() => setOpen(!open)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <HiMenuAlt3 size={26}  />
        </button>
        <div className="hidden md:flex search-box bg-gray-700 px-2 py-1 ">
        <HiSearch size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white placeholder-gray-400 outline-none ml-2"
        />
      </div>
      </div>
    
      <div className="flex items-center space-x-4">
    
       
      <div className="flex items-center space-x-4">
         
        <Link to="/messages" className="relative text-white hover:text-gray-300 bg-gray-400 rounded-full p-1">
          <SlEnvolope size={20} />
         
        </Link>
     
        <Link to="/settings" className="relative text-white hover:text-gray-300 bg-gray-400 rounded-full p-1">
          <RiSettings4Line size={20} />
        </Link>

        <Link to="/notifications" className="relative text-white hover:text-gray-300 bg-gray-400 rounded-full p-1">
          <FiBell size={20} />
         
        </Link>

        <Link to="/profile" className="ml-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-700"
          />
        </Link>
      </div>
      
      </div>
    </header>
  );
};

export default Nav;
