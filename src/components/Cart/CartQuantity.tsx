import React, { useState, useEffect } from 'react';

const CartQuantity: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const updateQuantity = () => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
        const cartItems = JSON.parse(storedCartItems);
        const totalQuantity = cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0);
        setQuantity(totalQuantity);
      }
    };

    updateQuantity(); // Update quantity on initial render

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cartItems') {
        updateQuantity(); // Update quantity when 'cartItems' in localStorage changes
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <span>{quantity}</span>
  );
};

export default CartQuantity;
