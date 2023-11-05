import ProductDetails from "@/components/ProductDetails/ProductDetails";
import useProducts from "@/hooks/useProducts";

export default function ProductDetail() {
const {selectedProducts} = useProducts();
    return ( 
        <>
        <h2>Detalhes do Produto {selectedProducts?.title}</h2>
        <ProductDetails product={selectedProducts!} />
        </>
    );
  }