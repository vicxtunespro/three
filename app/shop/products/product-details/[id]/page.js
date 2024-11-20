import React from 'react'
import Products from '@/app/data/products'
import DetailsPage from '@/components/shop/productDetails';

export default function ProductDetails({params}) {
  const Product = Products.find((product) => product.id  == params.id);

  return (
    <DetailsPage
    Product={Product}
    />
  )
}
