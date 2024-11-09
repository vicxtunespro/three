import Image from 'next/image';
import React from 'react'

export default function DisplayProducts() {
  return (
    <div className=''>
        <CardHeder/>
        <div className='grid grid-cols-12 gap-4 w-full'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
    </div>
  )
}

function CardHeder(){
  return(
    <div className='grid grid-cols-12 my-16'>
      <div className='col-span-6 md:col-span-3'>
          <div className="text-xl font-semibold leading-none pb-2 after:block after:w-8 after:h-0.5 after:bg-orange-500 after:mt-4 after:rounded-full">
            All Products
          </div>
      </div>
        <div className='hidden md:col-span-6 md:flex justify-evenly items-center text-sm list-none'>
            <li>LATEST PRODUCTS</li>
            <li>TOP RATING</li>
            <li>BEST SELLING</li>
        </div>
        <div className='col-span-6 md:col-span-3 text-right'>
            <button className='py-2 px-4 border-2'>All products</button>
        </div>
    </div>
  );
}

function Card(){
  return(
    <div className='h-fit col-span-6 md:col-span-3'>
      <div className='h-40 md:h-56 bg-slate-200 flex items-center relative overflow-hidden'>
        <Image src="/imgs/5.jpg" width={1000} height={800} alt="Product"></Image>
        <span className='py-0.5 px-2 m-1 bg-rose-500 text-xs text-slate-100 absolute right-0 top-0'>-30%</span>
      </div>
      <div className='flex flex-col gap-1 py-4  text-xs md:text-md'>
        <div className='text-slate-500'>⭐⭐⭐⭐⭐ (5 Reviews)</div>
        <div className='font-bold text-[14px]'>Living room sofa</div>
        <div className='flex gap-1 text-slate-400 items-baseline'><s className='text-xs w-fit'>$40000</s><div className='text-orange-500 font-bold text-[14px]'>$40000</div></div>
      </div>
    </div>
  );
}