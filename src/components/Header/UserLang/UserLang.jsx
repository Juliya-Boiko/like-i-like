import { LangList, LangItem, LangBtn } from "./UserLang.styled";
import { useTranslation } from "react-i18next";
import Flag from 'react-flagkit';

export const UserLang = () => {

  const { i18n } = useTranslation();  

  const changeLangHandler = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LangList>
      <LangItem>
        <LangBtn type="button" onClick={() => changeLangHandler("en")}>
          <Flag country="US" size={25} />
        </LangBtn>
      </LangItem>
      <LangItem>
        <LangBtn type="button" onClick={() => changeLangHandler("ua")}>
          <Flag country="UA" size={25} />
        </LangBtn>
      </LangItem>
    </LangList>
  );
};