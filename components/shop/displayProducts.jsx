'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import FilterBtn from './filterBtn';
import Link from 'next/link';
import Products from '@/app/data/products';



export default function DisplayProducts() {
  const [category, setCategory] = useState('Latest');

  // filtering 
  const filteredProducts = Products.filter((products) => products.category == category);

  return (
    <div className=''>
        <CardHeder
        setCategory = {setCategory}
        />
        <div className='grid grid-cols-12 gap-4 w-full'>
          {
            filteredProducts.map((product) => (
              <Card
              key={product.id}
              id = {product.id}
              name = {product.name}
              image = {product.image}
              price = {product.price}
              reviews={product.reviews}
              discount={product.discount}
              category={product.category}
              rating={product.rating}
              />
            ))
          }

          {/* if no item */}
          {
            filteredProducts.length == 0 && (
                <div>No item found</div>
              )
          }
        </div>
    </div>
  )
}

function CardHeder({setCategory}){
  return(
    <div className='grid grid-cols-12 my-16'>
      <div className='col-span-5 md:col-span-3'>
          <div className="text-xl font-semibold leading-none pb-2 after:block after:w-8 after:h-0.5 after:bg-orange-500 after:mt-4 after:rounded-full">
            All Products
          </div>
      </div>
        <div className='hidden md:col-span-6 md:flex justify-evenly items-center text-sm list-none'>
            <li onClick={() => setCategory('Latest')} className='cursor-pointer hover:underline'>LATEST PRODUCTS</li>
            <li onClick={() => setCategory('Top Rating')} className='cursor-pointer hover:underline'>TOP RATING</li>
            <li onClick={() => setCategory('Best Selling')} className='cursor-pointer hover:underline'>BEST SELLING</li>
        </div>
        <FilterBtn setCategory={setCategory}/>
        <div className='col-span-5 md:col-span-3 text-right'>
            <button className='py-1 px-2 border-2'>All products</button>
        </div>
    </div>
  );
}

function Card({id, name, price, discount, rating, reviews, image, category}){
  return(
    <Link href={`/shop/products/product-details/${id}`} className='h-fit col-span-6 md:col-span-3'>
      <div className='h-40 md:h-56 bg-slate-200 flex items-center relative overflow-hidden'>
        <Image src={image} width={1000} height={800} alt="Product"></Image>
        <span className='py-0.5 px-2 m-1 bg-rose-500 text-xs animate-pulse text-slate-100 absolute right-0 top-0'>{discount}%</span>
      </div>
      <div className='flex flex-col gap-1 py-4  text-xs md:text-md'>
        <div className='text-slate-500'>⭐⭐⭐⭐⭐ ({reviews} Reviews)</div>
        <div className='font-bold text-[14px]'>{name}</div>
        <div className='flex gap-1 text-slate-400 items-baseline'><s className='text-xs w-fit'>${price}</s><div className='text-orange-500 font-bold text-[14px]'>${(price * discount / 100) + price}</div></div>
      </div>
    </Link>
  );
}