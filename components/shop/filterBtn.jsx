'use client'
import React, { useState } from 'react'

export default function FilterBtn() {
  const [filters, setFilters] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setFilters(false);
    setSearch(true);
  }

  return (
    <div className='col-span-2 flex justify-center relative md:hidden'>
        <div 
        className='w-8 h-8 bg-rose-300 opacity-70 rounded-full flex justify-center items-center'
        onClick = {()=>setFilters(true)}
        >
            <div className='w-6 h-6 bg-rose-500 rounded-full'></div>
        </div>

        {filters && (
          <div className='absolute w-screen -bottom-10 shadow flex justify-evenly items-center text-xs list-none'>
            <li className='p-2'>LATEST PRODUCTS</li>
            <li className='p-2'>TOP RATING</li>
            <li className='p-2'>BEST SELLING</li>
            <li className='p-2' onClick={handleSearch}>🔍</li>
          </div>
        )}
        {search && (
          <div className='absolute w-screen -bottom-10 shadow flex justify-evenly items-center text-xs list-none'>
            <input type='text' placeholder='Product search' className='px-4 py-4 w-72 rounded-full'></input>
          </div>
        )}
    </div>
  )
}
