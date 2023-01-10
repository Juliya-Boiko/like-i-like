import { LangList, LangItem, LangIcon } from "./UserLang.styled";

export const UserLang = () => {

  const langHandler = () => {};

  return (
    <div>
      <LangList>
        <LangItem>EN /</LangItem>
        <LangItem>UA</LangItem>
      </LangList>
      <LangIcon onClick={langHandler} size="20px"/>
    </div>
  );
};