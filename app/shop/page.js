import Categories from '@/components/shop/categories'
import HeroSection from '@/components/shop/heroSection'
import React from 'react'
import DisplayProducts from '../../components/shop/displayProducts'

export default function Shop() {
  return (
    <div className='snap-y snap-mandatory snap-start'>
       <HeroSection/>
       <div className='p-4 md:p-8 lg:p-16'>
        <Categories/>
        <DisplayProducts/> 
       </div>
    </div>
  )
}
