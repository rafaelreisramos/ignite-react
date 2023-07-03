import Image from 'next/image'
import { HomeContainer, ProductCard } from '../styles/pages/home'

import igniteLab from '../assets/shirts/ignite-lab.png'
import igniterAbord from '../assets/shirts/igniter-abord.png'

export default function Home() {
  return (
    <HomeContainer>
      <ProductCard href="#">
        <Image src={igniteLab} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite Lab</strong>
          <span>R$ 89,99</span>
        </footer>
      </ProductCard>
      <ProductCard href="#">
        <Image src={igniterAbord} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Igniter Aboard</strong>
          <span>R$ 79,99</span>
        </footer>
      </ProductCard>
    </HomeContainer>
  )
}
