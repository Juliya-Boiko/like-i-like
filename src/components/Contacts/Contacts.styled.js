import styled from "styled-components";
import { Form, Field } from "formik";

export const ContactsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactsBtn = styled.button`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 24px;
  text-transform: uppercase;
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
`;

export const ContactsInput = styled(Field)`
  box-sizing: border-box;
  width: 320px;
  margin: 0 0 30px 0;
  padding: 17px;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 24px;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.xhite};
`;

export const ContactsError = styled.p`
  margin: 0 0 30px 0;
  color: ${p => p.theme.colors.accent};
`;