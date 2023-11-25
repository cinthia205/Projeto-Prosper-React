import React, { useState, useEffect } from 'react'
import styles from '@/styles/ProductList.module.css'
import { useRouter } from 'next/router';
import useProducts from '@/hooks/useProducts';

export default function ProductList() {
  const { products } = useProducts();
  const { push } = useRouter();

  const initialCartItems = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, []);

  const goToProduct = (id: number) => {
    push('/product/' + id);
  };

  const addToCart = (productId: number) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      const existingItemIndex = cartItems.findIndex((item) => item.id === productId);

      if (existingItemIndex !== -1) {
        const updatedItems = [...cartItems];
        updatedItems[existingItemIndex].quantity += 1;
        setCartItems(updatedItems);

        if (typeof window !== 'undefined') {
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          window.dispatchEvent(new Event('cartUpdated'));
        }
      } else {
        const newCartItem = { ...productToAdd, quantity: 1 };
        const updatedItems = [...cartItems, newCartItem];
        setCartItems(updatedItems);

        if (typeof window !== 'undefined') {
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          window.dispatchEvent(new Event('cartUpdated'));
        }
      }
    }
  };

  return !products.length ? (
    <div className={styles.productList}>Carregando...</div>
  ) : (
    <>
      <h2 style={{ textAlign: 'center' }}>Lista de Produtos</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.thumbnail} alt={product.title} onClick={() => goToProduct(product.id)} />
            <h2>{product.title}</h2>
            <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <div>
              <button onClick={() => addToCart(product.id)}>Adicionar no Carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}