import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImage from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag, X } from "@phosphor-icons/react";
import { SideMenu } from "../components/side-menu";


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="" />
        <button>
          <Handbag size={32} />
        </button>
      </Header>
        <SideMenu />
      <Component {...pageProps} />;
    </Container>
  );
}
