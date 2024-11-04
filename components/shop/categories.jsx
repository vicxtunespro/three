import React from 'react'
import { MdOutlineChair } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

export default function Categories() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
      <div className="col-span-4 md:col-span-4 lg:col-span-3 h-72 flex flex-col gap-4">
        <div className="text-3xl font-semibold leading-none pb-2 after:block after:w-12 after:h-1 after:bg-orange-500 after:mt-4 after:rounded-full">
          Shop<br></br>by categories
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <span className='text-6xl'><MdOutlineChair/></span>
            <span className='text-slate-400'>200+ <br></br>unique products</span>
          </div>
        </div>
        <div className='py-1 border-b-2 border-slate-950 flex items-center font-semibold w-fit'>
            ALL PRODUCT
            <IoMdArrowDropright />
        </div>
      </div>
      <div className="col-span-4 md:col-span-4 lg:col-span-3 bg-slate-100 h-72 bg-[url('/imgs/1.jpg')] bg-cover bg-center rounded overflow-hidden relative">
        <p className="absolute bottom-8 left-0 px-8 py-2 text-xl text-slate-100 font-normal bg-orange-500 bg-opacity-70 rounded-tr-full">Bedroom Essentials</p>
      </div>
      <div className="col-span-4 md:col-span-4 lg:col-span-3 bg-slate-100 h-72 bg-[url('/imgs/4.jpg')] bg-cover bg-center rounded overflow-hidden relative">
        <p className="absolute bottom-8 left-0 px-8 py-2 text-xl text-slate-100 font-normal bg-orange-500 bg-opacity-70 rounded-tr-full">Organisation</p>
      </div>
      <div className="col-span-4 md:col-span-4 lg:col-span-3 bg-slate-100 h-72 bg-[url('/imgs/3.jpg')] bg-cover bg-center rounded overflow-hidden relative">
        <p className="absolute bottom-8 left-0 px-8 py-2 text-xl text-slate-100 font-normal bg-orange-500 bg-opacity-70 rounded-tr-full">Kitchen Essentials</p>
      </div>
    </div>
  )
}
