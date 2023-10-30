import { useState, useEffect } from "react";

interface Product { 
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number 
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[] 
}

export default function ProductList() {
  const [products, setProduct] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product | null>(
    null
  );

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=8&skip=2`
      );
      const data = await response.json();

      setProduct(data.products);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  const getProductById = async (id: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();

      setSelectedProducts(data);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, selectedProducts };
}