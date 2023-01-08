import { TextAndIcon } from "../TextAndIcon";
import { AddressContainer } from "./style";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

interface AddressProps {
  street: string;
  number: string;
  city: string;
  district: string;
  uf: string;
  paymentOption: string;
}
export function Address({
  street,
  number,
  city,
  district,
  uf,
  paymentOption,
}: AddressProps) {
  return (
    <AddressContainer>
      <TextAndIcon
        icon={<MapPin weight="fill" size={16} />}
        color="purple-500"
        text={
          <p>
            Entrega em{" "}
            <strong>
              {street}, {number}
            </strong>
          </p>
        }
        subText={`${district} - ${city}, ${uf}`}
      />
      <TextAndIcon
        color="yellow-500"
        icon={<Clock weight="fill" size={16} />}
        text="Previsão de entrega"
        subText={<strong>20 min - 30 min</strong>}
      />
      <TextAndIcon
        color="yellow-900"
        icon={<CurrencyDollar weight="fill" size={16} />}
        text="Pagamento na entrega"
        subText={<strong>{paymentOption}</strong>}
      />
    </AddressContainer>
  );
}
