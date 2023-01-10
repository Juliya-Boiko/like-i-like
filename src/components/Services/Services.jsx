import { useState,  } from "react";
import { ServicePriceBtn } from "./ServicePriceBtn/ServicePriceBtn";
import { ServicePriceList } from "./ServicePriceList/ServicePriceList";

export const Services = () => {
  const [designShawn, setDesignShawn] = useState(true);
  const [renovationShawn, setRenovationShawn] = useState(false);

  const designHandler = () => {
    setDesignShawn(prevState => !prevState);
  };

  const renovationHandler = () => {
    setRenovationShawn(prevState => !prevState);
  };

  return (
    <div>
      <ServicePriceBtn title="design" state={designShawn} onClick={designHandler} />
      {designShawn && <ServicePriceList />}
      <ServicePriceBtn title="renovation" state={renovationShawn} onClick={renovationHandler} />
      {renovationShawn && <ServicePriceList />}
    </div>
  );
};