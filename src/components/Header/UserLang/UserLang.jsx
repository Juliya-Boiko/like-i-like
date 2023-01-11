import { LangBtn, LangIcon } from "./UserLang.styled";

export const UserLang = () => {

  const langHandler = () => {
    console.log('change lang');
  };

  return (
    <LangBtn type="button" onClick={langHandler}>
      <LangIcon size="30px"/>
    </LangBtn>
  );
};