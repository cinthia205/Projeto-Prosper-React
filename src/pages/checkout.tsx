import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [coupon, setCoupon] = useState('');
  const router = useRouter();

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
      const calculatedTotal = calculatedSubtotal - calculatedSubtotal * calculatedDiscount;
      setTotal(calculatedTotal);
    }
  }, [cartItems, coupon]);

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    if (paymentMethod !== '') {
      router.push({
        pathname: '/confirmation',
        query: {
          items: JSON.stringify(cartItems),
          subtotal: subtotal.toString(), // Convert to string before sending in query params
          discount: discount.toString(),
          total: total.toString(),
          paymentMethod,
        },
      });
    } else {
      console.log('Escolha um método de pagamento antes de finalizar a compra.');
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
        {/* Adicione mais métodos de pagamento conforme necessário */}
      </div>

      <button onClick={handleCheckout} disabled={!paymentMethod}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Checkout;