import { Navigation } from "components/Navigation/Navigation";
import { UserLang } from "components/UserLang/UserLang";
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