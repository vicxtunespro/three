import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <div className='md:h-[50vh] lg:h-screen bg-orange-950 text-slate-100 md:grid md:grid-cols-8 pt-10 overflow-hidden relative'>
        <div className="intro col-span-4 md:col-span-4 px-4 md:px-20 lg:px-48
         flex flex-col gap-8 justify-center">
            <div className='flex flex-col w-48 p-4 border-slate-200 border-l-2'>
                <span>Interior Masters</span>
                <span>2024</span>
            </div>
            <div className='text-4xl md:text-6xl lg:text-8xl col-span-8 w-full md:w-48 lg:w-72 font-semibold '>
                New Collection <br></br>
                <p className='text-sm tracking-normal font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit, et possimus maxime quod debitis harum obcaecati alias qui magnam recusandae.</p>
            </div>
            <Button className="text-slate-50 bg-orange-700 w-36">Shop now</Button>
        </div>
        <div className="hero-img col-span-4 md:col-span-4 py-32 md:py-48 relative overflow-x-hidden">
                <Image src={"/imgs/hero-img.png"} width={2000} height={500} className='absolute w-[100rem] md:left-28 lg:left-38 top-10 md:top-48 scale-90 md:scale-150 lg:scale-125'></Image>
        </div>
    </div>
  )
}
