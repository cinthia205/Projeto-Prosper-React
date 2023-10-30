import React, { useEffect, useState } from 'react'

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[] 
}


export default function ProductList() {
const [products, setProducts] = useState<Product[]>([])

  const getProducts = () => {
    fetch('https://dummyjson.com/products?limit=8&skip=10')
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }
  
  useEffect (() => {
getProducts();
  }, [])
  
  return (
    <>
      <h2 style = {{textAlign: 'center'}}>Lista de Produtos</h2>
      <div className='product-list'>
        {products.map(product => (
          <div className='product-card'>
        <img src={product.thumbnail} alt='{product.title}'/>
        <h2>{product.title}</h2>
        <p>R$ {product.price.toFixed(2)}</p>
        </div>
          ))}
      </div>
    </>
  )
}