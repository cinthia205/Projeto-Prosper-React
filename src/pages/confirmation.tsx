interface ConfirmationProps {
    items: CartItemType[];
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
    return (
      <div>
        <h1>Confirmação do Pedido</h1>
  
        <div>
          <h2>Itens Comprados</h2>
          {items.map((item) => (
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
          <p>Subtotal: R$ {subtotal}</p>
          <p>Desconto aplicado: R$ {discount}</p>
          <p>Total: R$ {total}</p>
        </div>
  
        <div>
          <h2>Dados do Pagamento</h2>
          <p>Método de pagamento: {paymentMethod}</p>
        </div>
      </div>
    );
  };

  export default Confirmation;