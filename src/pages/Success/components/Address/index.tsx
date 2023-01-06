import { TextAndIcon } from "../TextAndIcon";
import { AddressContainer } from "./style";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

export function Address() {
  return (
    <AddressContainer>
      <TextAndIcon
        icon={<MapPin weight="fill" size={16} />}
        text={
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </p>
        }
        subText="Farrapos - Porto Alegre, RS"
      />
      <TextAndIcon
        icon={<Clock weight="fill" size={16} />}
        text="Previsão de entrega"
        subText={<strong>20 min - 30 min</strong>}
      />
      <TextAndIcon
        icon={<CurrencyDollar weight="fill" size={16} />}
        text="Pagamento na entrega"
        subText={<strong>Cartão de Crédito</strong>}
      />
    </AddressContainer>
  );
}
