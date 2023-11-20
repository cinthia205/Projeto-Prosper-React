import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";
  
  const Confirmation: React.FC = () => {
    const { cartItems } = useCart();
    const router = useRouter();
  const { items: itemsFromRouter, subtotal: subtotalFromRouter, discount: discountFromRouter, total: totalFromRouter, paymentMethod: paymentMethodFromRouter } = router.query;

  // Verificação se os valores estão presentes e corretamente tipados
  const receivedItems = Array.isArray(itemsFromRouter)
    ? itemsFromRouter.map((item: any) => ({
        ...item,
        thumbnail: item.thumbnail || '', // Defina um valor padrão para a imagem se não estiver presente
      }))
    : [];
  const receivedSubtotal = typeof subtotalFromRouter === 'string' ? parseFloat(subtotalFromRouter) : 0;
  const receivedDiscount = typeof discountFromRouter === 'string' ? parseFloat(discountFromRouter) : 0;
  const receivedTotal = typeof totalFromRouter === 'string' ? parseFloat(totalFromRouter) : 0;
  const receivedPaymentMethod = typeof paymentMethodFromRouter === 'string' ? paymentMethodFromRouter : '';
  return (
    <div>
      <h1>Confirmação do Pedido</h1>
      <div>
        <h2>Itens Comprados</h2>
        {cartItems.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <p>Quantidade: {product.quantity}</p>
              <p>Preço unitário: R$ {product.price.toFixed(2)}</p>
            </div>
        ))}
      </div>
      <div>
        <h2>Resumo do Pedido</h2>
        <p>Subtotal: R$ {receivedSubtotal}</p>
        <p>Desconto aplicado: R$ {receivedDiscount}</p>
        <p>Total: R$ {receivedTotal}</p>
      </div>
      <div>
        <h2>Dados do Pagamento</h2>
        <p>Método de pagamento: {receivedPaymentMethod}</p>
      </div>
    </div>
  );
};

export default Confirmation;