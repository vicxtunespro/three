'use client'
import React, { useState } from 'react'
import { FiHome, FiSearch, FiShoppingBag, FiShoppingCart, FiUser } from "react-icons/fi";
import Link from 'next/link';

export default function MobileNavBar() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active menu

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked icon as active
  };

  return (
    <div className='grid grid-cols-5 place-items-center h-20 rounded-t-[1.5rem] bg-slate-100 fixed bottom-0 w-screen md:hidden z-10 overflow-hidden shadow'>
      <Link
        href={"/"} 
        className={`menu-icon col-span-1 ${activeIndex === 0 ? 'active-menu-icon' : ''}`}
        onClick={() => handleClick(0)}
      >
        <FiHome />
        <p className={`label ${activeIndex === 0 ? 'hidden' : ''}`}>Home</p>
      </Link>
      <Link
        href={"/search"}
        className={`menu-icon col-span-1 ${activeIndex === 1 ? 'active-menu-icon' : ''}`}
        onClick={() => handleClick(1)}
      >
        <FiSearch />
        <p className={`label ${activeIndex === 1 ? 'hidden' : ''}`}>Search</p>
      </Link>
      <Link
        href={"/shop"}
        className={`menu-icon col-span-1 ${activeIndex === 2 ? 'active-menu-icon' : ''}`}
        onClick={() => handleClick(2)}
      >
        <FiShoppingBag />
        <p className={`label ${activeIndex === 2 ? 'hidden' : ''}`}>Shop</p>
      </Link>
      <Link
      href={"/chart"}
        className={`menu-icon col-span-1 ${activeIndex === 3 ? 'active-menu-icon' : ''}`}
        onClick={() => handleClick(3)}
      >
        <FiShoppingCart />
        <p className={`label ${activeIndex === 3 ? 'hidden' : ''}`}>Cart</p>
      </Link>
      <Link
        href={"/profile"}
        className={`menu-icon col-span-1 ${activeIndex === 4 ? 'active-menu-icon' : ''}`}
        onClick={() => handleClick(4)}
      >
        <FiUser />
        <p className={`label ${activeIndex === 4 ? 'hidden' : ''}`}>Profile</p>
      </Link>
    </div>
  );
}
