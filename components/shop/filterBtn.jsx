'use client'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

export default function FilterBtn({ setCategory }) {
  const [filters, setFilters] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setFilters(false);
    setSearch(true);
  }

  const handleFilter = () => {
    setFilters(!filters)
    setSearch(false)
  }

  return (
    <div className='col-span-2 flex justify-center relative md:hidden'>
        <div 
        className='w-10 h-10 bg-rose-300 opacity-70 animate-pulse rounded-full flex justify-center items-center'
        onClick = {handleFilter}
        >
            <div className='w-8 h-8 bg-rose-500 text-slate-100 rounded-full flex justify-center items-center'><FaFilter /></div>
        </div>

        {filters && (
          <div className='absolute w-screen -bottom-10 flex justify-evenly items-center text-xs list-none'>
            <li onClick={() => setCategory('Latest')} className='cursor-pointer hover:underline'>LATEST PRODUCTS</li>
            <li onClick={() => setCategory('Top Rating')} className='cursor-pointer hover:underline'>TOP RATING</li>
            <li onClick={() => setCategory('Best Selling')} className='cursor-pointer hover:underline'>BEST SELLING</li>
            <li className='p-2' onClick={handleSearch}><FaSearch /></li>
          </div>
        )}
        {search && (
          <div className='absolute w-screen -bottom-10  flex justify-evenly items-center text-xs list-none'>
            <input type='text' placeholder='Product search' className='px-4 py-2 w-72 rounded-full'></input>
          </div>
        )}
    </div>
  )
}
