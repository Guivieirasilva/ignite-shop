import { X } from "@phosphor-icons/react";

import camiseta from "../assets/camisetas/1.png";
import Image from "next/image";
import { MenuContainer, Wrapper } from "../styles/components/side-menu";
import { CardProduct } from "./card-product";
import { Button } from "../styles/pages/app";

export function SideMenu() {
  return (
    <MenuContainer>
      <X size={32} />

      <Wrapper>
        <h3>Sacola de Produtos</h3>
        <CardProduct />
        <CardProduct />
        <CardProduct />
  
      </Wrapper>
      <footer>

        <div>
          <p>
            <span>Quantidade </span>3 itens
          </p>
          <p>
            Valor Total <strong>R$ 19,90</strong>
          </p>
        </div>

        <Button>Finalizar compra</Button>
      </footer>
    </MenuContainer>
  );
}
