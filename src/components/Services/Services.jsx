import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ServicePriceBtn } from "./ServicePriceBtn/ServicePriceBtn";
import { ServicePriceList } from "./ServicePriceList/ServicePriceList";

export const Services = () => {
  const [designShawn, setDesignShawn] = useState(true);
  const [renovationShawn, setRenovationShawn] = useState(false);
  const { t } = useTranslation();  

  const designHandler = () => {
    setDesignShawn(prevState => !prevState);
  };

  const renovationHandler = () => {
    setRenovationShawn(prevState => !prevState);
  };

  return (
    <div>
      <ServicePriceBtn title={t('design')} state={designShawn} onClick={designHandler} />
      {designShawn && <ServicePriceList />}
      <ServicePriceBtn title={t('renovation')} state={renovationShawn} onClick={renovationHandler} />
      {renovationShawn && <ServicePriceList />}
    </div>
  );
};