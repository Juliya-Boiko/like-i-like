import { useTranslation } from "react-i18next";
import { NavList, NavItem, NavItemLink, NavItemText, NavIconHome, NavIconPortfolio } from "./Navigation.styled";

export const Navigation = () => {
  const { t } = useTranslation();  

  return (
    <NavList>
      <NavItem>
        <NavItemLink to="/">
          <NavIconHome size="20px"/>
          <NavItemText>
            {t('nav_main')}
          </NavItemText>
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="portfolio">
          <NavIconPortfolio size="20px" />
          <NavItemText>
            {t('nav_portfolio')}
          </NavItemText>
        </NavItemLink>
      </NavItem>
    </NavList>
  );
};