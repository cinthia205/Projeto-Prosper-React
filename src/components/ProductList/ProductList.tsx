import React, { useState } from 'react'
import styles from '@/styles/ProductList.module.css'
import { useRouter } from 'next/router';
import useProducts from '@/hooks/useProducts';

export default function ProductList() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      // Product already exists in the cart, update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // Product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      // Decrease the quantity, or remove the item if it's 1
      const updatedCart = [...cartItems];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCart);
    }
  };

  const {products} = useProducts();
  const { push } = useRouter()

  const goToProduct = (id: number) => {
    push('/product/' + id)
  }

  return !products.length ? <div className={styles.productList}>Carregando...</div> : (
    <>
      <h2 style={{ textAlign: 'center' }}>Lista de Produtos</h2>
      <div className={styles.productList}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.thumbnail} alt='{product.title}' onClick={() => goToProduct(product.id)} />
            <h2>{product.title}</h2>
            <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
            <div>
            <button onClick={() => removeFromCart(product)}>-</button>
              {cartItems.find((item) => item.product.id === product.id)?.quantity || 0}
              <button onClick={() => addToCart(product)}>+</button>
              </div>
            <button onClick={() => addToCart(product)}>Adicionar no Carrinho</button>
          </div>
        ))}
      </div>
    </>
  )
}