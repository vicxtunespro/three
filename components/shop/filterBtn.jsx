import React from 'react'

export default function FilterBtn() {
  return (
    <div className='col-span-2 flex justify-center relative md:hidden'>
        <div className='w-8 h-8 bg-rose-300 opacity-70 rounded-full flex justify-center items-center'>
            <div className='w-6 h-6 bg-rose-500 rounded-full'></div>
        </div>
        <div className='absolute w-screen -bottom-10 shadow flex justify-evenly items-center text-xs list-none'>
            <li className='p-2'>LATEST PRODUCTS</li>
            <li className='p-2'>TOP RATING</li>
            <li className='p-2'>BEST SELLING</li>
        </div>
    </div>
  )
}
