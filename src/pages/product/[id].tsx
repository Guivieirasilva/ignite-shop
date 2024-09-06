import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

import axios from "axios";
import { useContext, useState } from "react";
import Head from "next/head";
import { CartContext } from "../../context/CartProvider";
import { formatPrice } from "../../helpers/formatPrice";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useContext(CartContext);

  function handleAddItem() {
    addItem({
      id: product.id,
      name: product.name,
      imageURL: product.imageURL,
      priceId: product.defaultPriceId,
      unitAmount: product.price,
    });
    
  }

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post(`/api/checkout`, {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("falha ao redirecionar ao checkout");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageURL} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {formatPrice(product.price)}
          </span>
          <p>{product.description}</p>

          <div>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              Comprar Agora
            </button>
            <button className="add_cart" onClick={handleAddItem}>
              Adicionar ao Carrinho
            </button>
          </div>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "prod_QWwbZrJqCIVZz9",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageURL: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2,
  };
};
