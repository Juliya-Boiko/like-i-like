import { Navigation } from "components/Header/Navigation/Navigation";
import { UserLang } from "components/Header/UserLang/UserLang";
import { MainContainer } from "components/common/MainContainer";
import { HeaderContainer, HeaderContent } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <HeaderContent>
          <Navigation />
          <UserLang />
        </HeaderContent>
      </MainContainer>
    </HeaderContainer>
  );
};