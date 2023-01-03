import { AddressItem, AddressLink } from "./Address.styled";

export const Address = () => {
  return (
    <address>
      <ul>
        <AddressItem>
          <AddressLink href="tel:+380 67 243 87 63">+380 67 243 87 63</AddressLink>
        </AddressItem>
        <AddressItem>
          <AddressLink href="mailto:likeilike2012@gmail.com">likeilike2012@gmail.com</AddressLink>
        </AddressItem>
        <AddressItem>
          Kyiv, Regeneratornaya st. 4
        </AddressItem>
      </ul>
    </address>
  );
};