import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Cart: React.FC<CartProps> = ({ items }) => {
  const { cartItems, setCartItems } = useCart();
  
    useEffect(() => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);
  
    useEffect(() => {
      if (items && items.length > 0) {
        setCartItems(items);
      }
    }, [items]);
  
    const removeItem = (id: number) => {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };
  
    const increaseQuantity = (id: number) => {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };
  
    const decreaseQuantity = (id: number) => {
      const updatedItems = cartItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };
  
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    return (
      <div>
        <h2>Meu Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Sem itens no carrinho</p>
        ) : (
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
                <button onClick={() => removeItem(product.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p>Preço Total: R$ {getTotalPrice().toFixed(2).replace('.', ',')}</p>
        <Link href={{ pathname: '/checkout', query: { cartItems: JSON.stringify(cartItems) } }}>
        <button disabled={cartItems.length === 0}>Ir para Checkout</button>
      </Link>
      </div>
    );
  };
  
  export default Cart;
