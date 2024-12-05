import React from 'react'
import { IoWarning } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
        <div className='text-8xl text-orange-600'><IoWarning></IoWarning></div>
        <div className='text-2xl text-slate-800 font-black'>UNDER CONSTRACTION</div>
        <div className='text-slate-500'>Powered Vtec UG</div>
    </div>
  )
}
