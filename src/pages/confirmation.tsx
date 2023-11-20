import { useRouter } from "next/router";

interface ConfirmationProps {
    items: CartItem[];
    subtotal: number;
    discount: number;
    total: number;
    paymentMethod: string;
  }
  
  const Confirmation: React.FC<ConfirmationProps> = ({
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
  }) => {
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
        {receivedItems.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço unitário: R$ {item.price}</p>
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