import { PriceList, PriceListItem, PriceTitle, PriceAmount } from "./ServicePriceList.styled";

export const ServicePriceList = () => {
  return (
    <PriceList>
      <PriceListItem>
        <PriceTitle>interior design</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
        <PriceTitle>interior design</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
        <PriceTitle>interior design</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
        <PriceTitle>interior design</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
    </PriceList>
  );
};