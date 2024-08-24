import Image from "next/image";
import { HeaderContainer } from "../styles/pages/app";
import logo from "../assets/logo.svg";
import { Cart } from "./cart";
import Link from "next/link";

export function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={logo} alt="" />
      </Link>
      <Cart />
    </HeaderContainer>
  );
}
