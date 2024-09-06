export function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);

  return formattedPrice;
}
