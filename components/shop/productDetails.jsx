import React from 'react'

export default function DetailsPage({Product}) {
  return (
    <div className='flex h-[90vh]'>
        <div className='bg-slate-300 w-1/2'>
            <ProductReview/>
        </div>
        <div className='w-1/2 p-16 pr-48'>
            <ProductInfo
                Product={Product}
            />
        </div>
    </div>
  )
}

function ProductReview(){
    return(
        <div>Product Review</div>
    );
}

function ProductInfo({Product}){
    return(
        <div className='flex flex-col gap-4'>
            <div>{Product.category}</div>
            <div className='product-title text-3xl font-bold font-sans'>
                {Product.name}
                <div className='product-color text-2xl font-light'>White</div>
            </div>
            
            <div className='product-rating text-xs font-medium flex w-full justify-start gap-4'>
                <div>⭐⭐⭐⭐⭐</div>
                <div>{Product.reviews} Reviews</div>
            </div>
            <div className='product-pricing w-full text-normal font-medium flex justify-start gap-16'>
                <div className='flex flex-col'>
                    <span className='text-xs pb-1 text-slate-500'>PRICE</span>
                    <span className='text-2xl font-semibold text-orange-700'>${Product.price}</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs pb-1 text-slate-500'>QUANTITY</span>
                    <div className='w-36 shadow-inner rounded-full flex justify-between items-center bg-slate-300 p-1'>
                        <span className='flex w-6 h-6 bg-slate-50 rounded-full items-center justify-center  text-slate-500 cursor-pointer'>-</span>
                        <span>2</span>
                        <span className='flex w-6 h-6 bg-slate-50 rounded-full items-center justify-center  text-slate-500 cursor-pointer'>+</span>
                    </div>
                </div>
            </div>
            <div className='product-desc w-full flex flex-col'>
                <div className='flex justify-start'>
                    <span className='border-b-2 hover:border-slate-600 w-full cursor-pointer'>Description</span>
                    <span className='border-b-2 hover:border-slate-600 w-full cursor-pointer'>Details</span>
                </div>

                {/* Details or Description */}
                <div className='py-6 flex flex-col  gap-2 text-sm'>
                    <div className='grid grid-cols-12  w-full gap-4'>
                        <span className='col-span-3'>Size</span>
                        <span className='col-span-9'>29.4'H x 35.6'W x 32.3'D</span>
                    </div>
                    <div className='grid grid-cols-12  w-full gap-4'>
                        <span className='col-span-3'>Sofa Height</span>
                        <span className='col-span-9'>29.4'</span>
                    </div>
                    <div className='grid grid-cols-12  w-full gap-4'>
                        <span className='col-span-3'>Material</span>
                        <span className='col-span-9'>Plywood, Cok Venteer, Semi-Anllime Metal Leather</span>
                    </div>
                    <div className='grid grid-cols-12  w-full gap-4'>
                        <span className='col-span-3'>Colour</span>
                        <span className='col-span-9'>CreamLeather</span>
                    </div>
                    <div className='grid grid-cols-12  w-full gap-4'>
                        <span className='col-span-3'>Weight</span>
                        <span className='col-span-9'>40 lbs</span>
                    </div>
                </div>
                
            </div>
            <div className='product-purchase font-medium flex justify-start gap-12 items-center'>
                    <div className='flex flex-col'>
                        <span className='text-xs text-slate-500'>PRICE</span>
                        <span className='text-2xl'>${Product.price}</span>
                    </div>
                    <button className='px-4 py-4 w-48 shadow-md bg-orange-700 rounded-full text-sm text-slate-50'>ADD TO CART</button> 
            </div>
        </div>
    );
}