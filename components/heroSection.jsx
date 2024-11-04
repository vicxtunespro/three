"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HeroSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    const titleVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 3 } },
        exit: { opacity: 0, x: 100, transition: { ease: "easeInOut", delay: 0.5 } }
      };
    const descVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: 100, transition: { ease: "easeInOut", delay: 0.5 } }
      };
    const numVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 100, transition: { ease: "easeInOut", delay: 1 } }
      };
    const btnVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { ease: "easeInOut", delay: 2.3 } }
      };
    const labelVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        exit: { opacity: 0, y: 100, transition: { ease: "easeInOut", delay: 1 } }
      };

  return (
    <div className="hero md:h-[100vh] bg-teal-800 grid grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-8 lg:grid-cols-12 lg:overflow-y-hidden">
        <div className="block1 h-96 md:h-full col-span-4 md:col-span-4 lg:col-span-3 bg-orange-950 px-36 flex justify-center items-center relative z-10">
            <div className="intro flex flex-col gap-4 md:absolute md:top-36 md:left-[10vw]">
                <motion.div
                ref={ref}
                variants={titleVariants}
                initial="hidden"
                animate={ isInView ?  "visible" : "hidden" }
                exit="exit"
                className="md:text-6xl text-5xl xl:text-8xl text-stone-100 md:w-96 block font-serif">Interior <br/> Equipments</motion.div>
                <motion.div
                variants={descVariants}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                exit="exit"
                className="text-sm text-stone-400 block w-32">
                    One stop e-platform for all interior design equipments and components.
                </motion.div>
                <motion.button
                variants={btnVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-4 py-4 w-32 text-xs flex justify-center gap-2 rounded-md text-stone-100 shadow shadow-orange-800 bg-orange-950"><a href="/shop">Shop now</a> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fill-rule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd" />
                </svg>
                </motion.button>
            </div>
        </div>
        <div className="block1 h-full col-span-4 md:col-span-4 lg:col-span-3 relative bg-no-repeat bg-cover bg-center bg-[url('/imgs/display4.jpg')]">
            <div className="overlay bg-stone-900 bg-opacity-35 h-full">
                <div className="info w-full flex flex-col gap-8 h-96 p-16 absolute bottom-0 text-white">
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-24 w-[1px] bg-white block"></motion.div>
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-light leading-4">01</motion.div>
                    <motion.div 
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-3xl leading-0 font-serif">Brilliant<br/>Lighting</motion.div>
                </div>
            </div>
        </div>
        <div className="block1 h-full col-span-4 md:col-span-4 lg:col-span-3 relative bg-no-repeat bg-cover bg-center bg-[url('/imgs/display3.jpg')]">
            <div className="overlay bg-stone-900 bg-opacity-35 h-full">
                <div className="info w-full flex flex-col gap-8 h-96 p-16 absolute bottom-0 text-white">
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-24 w-[1px] bg-white block"></motion.div>
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-light leading-4">01</motion.div>
                    <motion.div 
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-3xl leading-0 font-serif">Brilliant<br/>Lighting</motion.div>
                </div>
            </div>
        </div>
        <div className="block1 h-full col-span-4 md:col-span-4 lg:col-span-3 relative bg-no-repeat bg-cover bg-center bg-[url('/imgs/display1.jpg')]">
            <div className="overlay bg-stone-900 bg-opacity-35 h-full">
                <div className="info w-full flex flex-col gap-8 h-96 p-16 absolute bottom-0 text-white">
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-24 w-[1px] bg-white block"></motion.div>
                    <motion.div 
                    variants={numVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-light leading-4">01</motion.div>
                    <motion.div 
                    variants={labelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-3xl leading-0 font-serif">Brilliant<br/>Lighting</motion.div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}
