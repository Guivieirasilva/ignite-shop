import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import Head from "next/head";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext, Item } from "../context/CartProvider";
import { formatPrice } from "../helpers/formatPrice";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
    priceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addItem, items } = useContext(CartContext);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddItem(product: any) {
    addItem({
      id: product.id,
      name: product.name,
      imageURL: product.imageURL,
      priceId: product.priceId,
      unitAmount: product.price,
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id}>
            <Product className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageURL} width={520} height={480} />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <button onClick={() => handleAddItem(product)}>
                  <Handbag weight="bold" size={32} />
                </button>
              </footer>
            </Product>
          </div>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
  
    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: price.unit_amount,
      priceId: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
