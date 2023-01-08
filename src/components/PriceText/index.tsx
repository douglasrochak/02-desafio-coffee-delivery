interface PriceTextProps {
  priceNumber: number;
}

export function PriceText({ priceNumber }: PriceTextProps) {
  const priceNumberFormatted = priceNumber.toFixed(2).replace(".", ",");
  return <span>{priceNumberFormatted}</span>;
}
