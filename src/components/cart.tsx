import * as Dialog from "@radix-ui/react-dialog";
import {
  CartClose,
  CartContent,
  CartProduct,
  CartTitle,
  CartTrigger,
  ContentContainer,
  ImageContainer,
  TotalsContainer,
} from "../styles/components/cart";
import { Handbag, X } from "@phosphor-icons/react";
import Image from "next/image";
import camiseta from "../assets/camisetas/1.png";
import { Button } from "../styles/pages/app";

export function Cart() {
  return (
    <Dialog.Root>
      <CartTrigger>
        <span>5</span>
        <Handbag size={24} weight="bold" />
      </CartTrigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <ContentContainer>
            <CartTitle>Sacola de Compras</CartTitle>

            <section>
              <CartProduct>
                <ImageContainer>
                  <Image src={camiseta} alt="" width={102} height={102} />
                </ImageContainer>

                <div>
                  <span>Lorem Ipsulom</span>
                  <strong>R$ 10, 00</strong>
                  <button>Remover</button>
                </div>
              </CartProduct>
            </section>
          </ContentContainer>

          <TotalsContainer>
            <section>
              <div>
                <span>Quantidade</span>
                <span>8 item(s)</span>
              </div>

              <div>
                <strong>Valor Total</strong>
                <strong>R$ 10,00</strong>
              </div>
            </section>

            <Button
            // disabled={isCreatingCheckoutSession}
            // onClick={handleBuyProduct}
            >
              Finalizar compra
            </Button>
          </TotalsContainer>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
