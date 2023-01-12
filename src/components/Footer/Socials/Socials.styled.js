import styled from "styled-components";
import { animated_text } from "components/common/animations";

export const SocialList = styled.ul`
  display: flex;
  @media screen and (min-width: 425px) {
    flex-direction: column;
  }
`;

export const SocialItem = styled.li`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 18px;

  &:not(:last-child) {
    margin: 0 20px 0 0;
  }

  &:hover {
     animation: ${animated_text} 10s ease infinite;
  }
  transition: all 300ms ease-in-out;

  @media screen and (min-width: 425px) {
    &:not(:last-child) {
      margin: 0 0 18px 0;
    }
  }
`;

export const SocialLink = styled.a`
  color: inherit;
`;