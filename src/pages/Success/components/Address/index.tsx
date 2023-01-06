import { TextAndIcon } from "../TextAndIcon";
import { AddressContainer } from "./style";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

export function Address() {
  return (
    <AddressContainer>
      <TextAndIcon
        icon={<MapPin weight="fill" size={16} />}
        color="purple-500"
        text={
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </p>
        }
        subText="Farrapos - Porto Alegre, RS"
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
        subText={<strong>Cartão de Crédito</strong>}
      />
    </AddressContainer>
  );
}
