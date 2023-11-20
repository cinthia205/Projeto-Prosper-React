import React, { useEffect, useState } from 'react';

type CheckoutProps = {
  cartItems: CartItemType[];
};

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const [coupon, setCoupon] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const calculatedSubtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setSubtotal(calculatedSubtotal);

      let calculatedDiscount = 0;
      if (coupon === 'PARFUM10') {
        calculatedDiscount = 0.1; // Apply the coupon discount
      }
      setDiscount(calculatedSubtotal * calculatedDiscount);

      // Calculate total using a simpler expression
      const calculatedTotal = (1 - calculatedDiscount) * calculatedSubtotal;
      setTotal(calculatedTotal);
    }
  }, [cartItems, coupon]);

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    if (paymentMethod !== '') {
      console.log('Purchase completed successfully!');
      // Proceed with checkout logic
    } else {
      console.log('Choose a payment method before finalizing the purchase.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <label htmlFor="couponInput">Nome do Cupom:</label>
      <input
        id="couponInput"
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
      <p>Desconto: R$ {discount.toFixed(2)}</p>
      <p>Total: R$ {total.toFixed(2)}</p>

      <div>
        <h3>Escolha o método de pagamento:</h3>
        <button onClick={() => handlePaymentMethod('Cartão')}>Cartão de Crédito</button>
        <button onClick={() => handlePaymentMethod('Boleto')}>Boleto Bancário</button>
        {/* Add more payment methods as necessary */}
      </div>

      <button onClick={handleCheckout} disabled={!paymentMethod}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Checkout;
