import { useTranslation } from "react-i18next";
import { AddressList, AddressItem, AddressLink } from "./Address.styled";

export const Address = () => {
  const { t } = useTranslation();  

  return (
    <AddressList>
      <ul>
        <AddressItem>
          <AddressLink href="tel:+380 67 243 87 63">+380 67 243 87 63</AddressLink>
        </AddressItem>
        <AddressItem>
          <AddressLink href="mailto:likeilike2012@gmail.com">likeilike2012@gmail.com</AddressLink>
        </AddressItem>
        <AddressItem>
          {t('address')}
        </AddressItem>
      </ul>
    </AddressList>
  );
};