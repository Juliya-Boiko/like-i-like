import { PriceBtn, BtnIconDown, BtnIconRight } from "./ServicePriceBtn.styled";

export const ServicePriceBtn = ({ state, title, onClick }) => {
  return (
    <PriceBtn type="button" onClick={onClick}>
      { state ? <BtnIconDown size="30px"/> : <BtnIconRight size="30px" /> }
      {title}
    </PriceBtn>
  );
};