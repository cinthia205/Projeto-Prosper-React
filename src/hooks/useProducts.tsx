import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product | null>(
    null
  );
  const { query } = useRouter();

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=8&skip=10`
      );
      const data = await response.json();

      setProducts(data.products);
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

    if (query.id) {
      const productId = Number(query.id);
      getProductById(productId);
    }
  }, [query.id]);

  return { products, selectedProducts };
}
      