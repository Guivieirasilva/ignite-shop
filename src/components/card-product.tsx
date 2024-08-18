import {
  Card,
  ImageCard,
  InfoProduct,
} from "../styles/components/card-product";

import camiseta from "../assets/camisetas/1.png";
import Image from "next/image";

export function CardProduct() {
  return (
    <Card>
      <ImageCard>
        <Image src={camiseta} width={94} height={94} alt="" />
      </ImageCard>
      <InfoProduct>
        <span>Camiseta X</span>
        <strong>R$ 19,90</strong>
        <button>Remover</button>
      </InfoProduct>
    </Card>
  );
}
