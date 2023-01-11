import styled from "styled-components";
import { Form, Field } from "formik";

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactsMap = styled.iframe`
  margin: 0 0 30px 0;
  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

export const ContactsForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactsBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 425px) {
    width: 320px;
    padding: 17px 0;
    font-size: 24px;
  }
`;

export const ContactsInput = styled(Field)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0 0 15px 0;
  padding: 8px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 14px;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.xhite};
  @media screen and (min-width: 425px) {
    width: 320px;
    margin: 0 0 30px 0;
    padding: 17px;
    font-size: 24px;
  }
`;

export const ContactsError = styled.p`
  margin: 0 0 30px 0;
  color: ${p => p.theme.colors.accent};
`;