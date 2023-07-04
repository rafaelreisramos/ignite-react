import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { useRouter } from 'next/router'

interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
}

interface ProductProps {
  product: Product
}
Image
export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) return <h1>Loading...</h1>

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>

        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      },
    },
    revalidate: 60 * 60 * 1, // 60sec x 60min x 1 => 3600sec = 1h
  }
}
