'use client';
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"; // Import for session management
import {
  IoMdHeart,
  MdAccountCircle,
  MdHelpOutline,
  MdOutlineAccountCircle,
  MdOutlineSave,
  MdOutlineShoppingBag,
  MdShoppingCart,
} from "react-icons/md";

export default function NavBar({ disableDropdown }) {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);

  const { data: session } = useSession(); // Retrieve session data

  const handleHelp = () => {
    setIsAccountDropdownOpen(false);
    setIsHelpDropdownOpen(!isHelpDropdownOpen);
  };

  const handleAccount = () => {
    setIsHelpDropdownOpen(false);
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className="hidden sticky top-0 z-50 md:flex items-center justify-between md:px-4 lg:px-16 py-4 bg-white shadow-md">
      {/* Left Side: Logo and Hamburger Menu */}
      <div className="flex items-center gap-8">
        <button className="text-gray-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <h1 className="ml-2 mr-8 text-2xl font-bold text-gray-800">MALAIKA</h1>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex flex-1 mx-4 gap-4 relative">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="px-4 bg-orange-500 text-white rounded">SEARCH</button>
      </div>

      {/* Right Side: Account, Help, and Cart */}
      <div className="flex items-center space-x-2">
        {/* Account Section */}
        <div className="relative">
          {session ? (
            // If user is logged in
            <>
              <button
                className="flex items-center text-gray-500 hover:bg-slate-100 py-2 px-2 rounded cursor-pointer"
                onClick={handleAccount}
              >
                <MdOutlineAccountCircle className="size-6" />
                <span className="ml-2 font-semibold hidden lg:block">
                  {session.user.name || "Profile"}
                </span>
              </button>
              {isAccountDropdownOpen && (
                <div
                  onMouseLeave={handleAccount}
                  className="absolute -left-24 lg:-left-8 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg z-30"
                >
                  <ul>
                    <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <MdAccountCircle />
                      My Account
                    </li>
                    <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <MdOutlineShoppingBag />
                      Orders
                    </li>
                    <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <MdOutlineSave />
                      Saved Items
                    </li>
                  </ul>
                  <div className="w-full p-2">
                    <button
                      onClick={() => signOut()}
                      className="bg-red-500 hover:bg-red-700 block w-full rounded px-4 py-2 text-center text-slate-100 font-semibold"
                    >
                      SIGN OUT
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            // If user is not logged in
            <button
              onClick={() => signIn()}
              className="flex items-center text-gray-500 hover:bg-slate-100 py-2 px-2 rounded cursor-pointer"
            >
              <MdOutlineAccountCircle className="size-6" />
              <span className="ml-2 font-semibold hidden lg:block">Sign In</span>
            </button>
          )}
        </div>

        {/* Help Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-500 hover:bg-slate-100 py-2 px-2 rounded cursor-pointer"
            onClick={handleHelp}
          >
            <MdHelpOutline className="size-6" />
            <span className="ml-2 font-semibold hidden lg:block">Help</span>
          </button>
          {isHelpDropdownOpen && (
            <div
              onMouseLeave={handleHelp}
              className="absolute -left-36 lg:-left-8 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg"
            >
              <ul>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Help Center
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Place an Order
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Payment Options
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Delivery Timelines
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Returns & Refunds
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Warranty
                </li>
              </ul>
              <div className="w-full p-2">
                <button className="bg-orange-500 hover:bg-orange-700 block w-full rounded px-4 py-2 text-center text-slate-100 font-semibold">
                  Live Support
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <button className="flex items-center text-gray-500 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded">
          <MdShoppingCart className="size-6" />
          <span className="ml-2 font-semibold hidden lg:block">Cart</span>
        </button>
      </div>
    </div>
  );
}
