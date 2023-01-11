import { LangList, LangItem, LangBtn, LangIcon } from "./UserLang.styled";

export const UserLang = () => {

  const langHandler = () => {
    console.log('change lang');
  };

  return (
    <div>
      <LangList>
        <LangItem>EN /</LangItem>
        <LangItem>UA</LangItem>
      </LangList>
      <LangBtn type="button" onClick={langHandler}>
        <LangIcon size="20px"/>
      </LangBtn>
    </div>
  );
};