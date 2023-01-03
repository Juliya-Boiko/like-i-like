import { FooterContainer, FooterContent } from "./Footer.styled";
import { MainContainer } from "components/common/MainContainer";
import { Logo } from "components/Logo/Logo";
import { Address } from "./Address/Address";
import { Socials } from "./Socials/Socials";

export const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <FooterContent>
          <Logo width="157px" height="91px" />
          <Address />
          <Socials />
        </FooterContent>
      </MainContainer>
    </FooterContainer>
  );
};