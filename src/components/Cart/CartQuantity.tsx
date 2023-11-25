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
      if (e.key === 'cartItems' || e.type === 'cartUpdated') {
        updateQuantity(); // Update quantity when 'cartItems' in localStorage changes or cart is updated
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange as EventListener); // Listen for the custom event

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange as EventListener);
    };
  }, []);

  return (
    <span>{quantity}</span>
  );
};

export default CartQuantity;