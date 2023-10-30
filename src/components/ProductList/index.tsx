import React, { useEffect, useState } from 'react'

export default function ProductList() {
const [products, setProducts] = useState([])

  const getProducts = () => {
    fetch('https://dummyjson.com/products?limit=8')
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }
  
  useEffect (() => {
getProducts();
  }, [])
  
  return (
    <>
      <h2>Lista de Produtos</h2>
      <div>
        {products.map(product => (
        <div>{product.title} - {product.price.toFixed(2)}</div>
          ))}
      </div>
    </>
  )
}