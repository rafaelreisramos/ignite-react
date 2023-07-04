import { useRouter } from 'next/router'

export default function ProductDetails() {
  const { query } = useRouter()

  return <h1>Product: {JSON.stringify(query)}</h1>
}
