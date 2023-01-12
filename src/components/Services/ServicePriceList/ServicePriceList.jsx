import { useTranslation } from "react-i18next";
import { PriceList, PriceListItem, PriceTitle, PriceAmount } from "./ServicePriceList.styled";

export const ServicePriceList = () => {
  const { t } = useTranslation();  

  return (
    <PriceList>
      <PriceListItem>
        <PriceTitle>{t('interior_design')}</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
        <PriceTitle>{t('interior_design')}</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
        <PriceTitle>{t('interior_design')}</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
      <PriceListItem>
       <PriceTitle>{t('interior_design')}</PriceTitle>
        <PriceAmount>60$/м2</PriceAmount>
      </PriceListItem>
    </PriceList>
  );
};