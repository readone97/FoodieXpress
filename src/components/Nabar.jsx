
// src/components/Navbar.js

import React, { useState } from 'react';
import {MenuIcon, XIcon } from '@heroicons/react/outline';
import PaymentForm from './PaymentForm';


const Navbar = () => {

  const [isOpen, setIsOpen] =useState(false);
  const toggleMenu =() =>{
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute top-0 left-0 w-full flex justify-between text-white items-center p-5 bg-opacity-50 backdrop-blur-lg z-50'  style={{
        backgroundImage: "url('/public/Vector.png')",
      }}>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='' className='text-2xl font-bold'>FoodieXpress</a>

        {/** desktop links */}
        <div className='hidden md:flex space-x-9'>
          <a href='#' className='hover:border-b-2 border-solid border-customYellow'>Home </a>
          <a href='#' className='hover:border-b-2 border-solid border-customYellow'>Restaurants </a>
          
          <a href='#' className='hover:border-b-2 border-solid border-customYellow'>Menu</a>
          
          <a href='#' className='hover:border-b-2 border-solid border-customYellow'>Contact Us</a>
          
        </div>
        <div className='hidden md:flex space-x-6'>
          
          <PaymentForm />
          
          </div>

           {/** hamburger icon for links */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? <XIcon className="h-12 w-6"/> : <MenuIcon className="h-6 w-6"/>}
            </button>
          </div>
        
        </div>

        {/** mobile menu */}

        {isOpen && (
          <div className='md:hidden bg-white flex flex-col'>
            <a href='#' className='cursor-pointer'>Our impact</a>
            <a href='#' className='cursor-pointer'>Contact Us</a>
            <a href='#' className='cursor-pointer'>About Us</a>
          </div>
        )}
    </nav>

  );
};

export default Navbar;



