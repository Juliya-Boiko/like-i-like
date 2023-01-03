import { SocialItem, SocialLink } from "./Socials.styled";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Socials = () => {
  return (
    <ul>
      <SocialItem>
        <SocialLink href="https://www.facebook.com/">
          <AiFillFacebook size="20px"/>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.instagram.com">
          <AiFillInstagram size="20px" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://web.telegram.org">
          <FaTelegramPlane size="20px"/>
        </SocialLink>
      </SocialItem>
    </ul>
  );
};