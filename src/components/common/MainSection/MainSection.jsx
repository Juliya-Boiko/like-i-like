import { TitleBlock, TitleText, TitleSymbol, TitleAccent, SectionContent } from "./MainSection.styled";
import { MainContainer } from "../MainContainer/MainContainer";

export const MainSection = ({ descr, title, children }) => {
  
  return (
    <section>
      <TitleBlock>
        <MainContainer>
          <h2>
            <TitleText>{descr}</TitleText>
            <TitleSymbol>/ /</TitleSymbol>
            <TitleAccent>{title}</TitleAccent>
          </h2>
        </MainContainer>
      </TitleBlock>
      <SectionContent>
        <MainContainer>
          {children}
        </MainContainer>
      </SectionContent>
    </section>
  );
};