import Image from "next/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productImageUrls: string[];
}

export default function Success({
  customerName,
  productImageUrls,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <div>
          {productImageUrls.map((source, index) => {
            return (
              <ImageContainer key={index}>
                <Image src={source} width={120} height={120} alt="" />
              </ImageContainer>
            );
          })}
        </div>

        <h1>Compra Efetuada!</h1>

        <p>
          Uhu! <strong>{customerName}</strong>, suas {productImageUrls.length} camiseta(s) já estão a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items?.data.map((item) => {
    return item.price?.product as Stripe.Product;
  });
  const productImageUrls = products?.map((product) => product.images[0]);

  return {
    props: {
      customerName,
      productImageUrls,
    },
  };
};
