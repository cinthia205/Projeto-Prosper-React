import Image from 'next/image'

type ProductDetailsProps = {product: Product}

export default function ProductDetails({product}: ProductDetailsProps) {


        return ( 
            <div className='container'>
            <div className='imgMain'>
            <Image src={product?.thumbnail} alt={product?.title} width={300} height={300} />
            </div>
            <div className='productInfo'>
                <h3>{product?.title}</h3>
                <strong>{product?.brand}</strong>
            <p>{product?.description}</p>
            <h1>R$ {product?.price.toFixed(2).replace('.',',')}</h1>
            </div>
            </div>
        );
      }