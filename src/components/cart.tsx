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
import { Button } from "../styles/pages/app";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers/formatPrice";
import empty from "../assets/carrinho-vazio.png";
import axios from "axios";

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { items, removeItem } = useContext(CartContext);

  const totalPrice = items.reduce((acc, item) => {
    return (acc += item.unitAmount);
  }, 0);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const lineItems = items.map((item) => {
        return {
          price: item.priceId,
          quantity: 1,
        };
      });

      
      const response = await axios.post("/api/checkout", {
          lineItems,
        });
        
        console.log("response",response)

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("falha ao redirecionar ao checkout");
    }
  }

  return (
    <Dialog.Root>
      <CartTrigger>
        {items.length > 0 && <span>{items.length}</span>}
        <Handbag size={24} weight="bold" />
      </CartTrigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <ContentContainer>
            <CartTitle>Sacola de Compras</CartTitle>

            {items.length > 0 ? (
              <section>
                {items.map((item) => (
                  <CartProduct key={item.priceId}>
                    <ImageContainer>
                      <Image
                        src={item.imageURL}
                        alt=""
                        width={102}
                        height={102}
                      />
                    </ImageContainer>

                    <div>
                      <span>{item.name}</span>
                      <strong>{formatPrice(item.unitAmount)}</strong>
                      <button onClick={() => removeItem(item.priceId)}>
                        Remover
                      </button>
                    </div>
                  </CartProduct>
                ))}
              </section>
            ) : (
              <section className="empty">
                <Image src={empty} alt="" width={320} height={320} />
                <p>Não há produtos selecionados!</p>
              </section>
            )}
          </ContentContainer>

          {items.length > 0 && (
            <TotalsContainer>
              <section>
                <div>
                  <span>Quantidade</span>
                  <span>{items.length} item(s)</span>
                </div>

                <div>
                  <strong>Valor Total</strong>
                  <strong>{formatPrice(totalPrice)}</strong>
                </div>
              </section>

              <Button
                disabled={isCreatingCheckoutSession}
                onClick={handleBuyProduct}
              >
                Finalizar compra
              </Button>
            </TotalsContainer>
          )}
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
