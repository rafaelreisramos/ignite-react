import Image from 'next/image'
import { HomeContainer, ProductCard } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import igniteLab from '../assets/shirts/ignite-lab.png'
import igniterAbord from '../assets/shirts/igniter-abord.png'
import maratonaExplorer from '../assets/shirts/maratona-explorer.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <ProductCard href="#" className="keen-slider__slide">
        <Image src={igniteLab} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite Lab</strong>
          <span>R$ 89,99</span>
        </footer>
      </ProductCard>

      <ProductCard href="#" className="keen-slider__slide">
        <Image src={igniterAbord} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Igniter Aboard</strong>
          <span>R$ 79,99</span>
        </footer>
      </ProductCard>

      <ProductCard href="#" className="keen-slider__slide">
        <Image src={maratonaExplorer} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Maratona Explorer</strong>
          <span>R$ 69,99</span>
        </footer>
      </ProductCard>

      <ProductCard href="#" className="keen-slider__slide">
        <Image src={maratonaExplorer} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Maratona Explorer</strong>
          <span>R$ 69,99</span>
        </footer>
      </ProductCard>
    </HomeContainer>
  )
}
