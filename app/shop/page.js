import Categories from '@/components/shop/categories'
import HeroSection from '@/components/shop/heroSection'
import React from 'react'

export default function Shop() {
  return (
    <div>
       <HeroSection/>
       <div className='p-4 md:p-8 lg:p-16'>
        <Categories/> 
       </div>
    </div>
  )
}
