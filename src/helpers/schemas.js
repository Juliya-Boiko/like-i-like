import * as yup from 'yup';

const nameRegExp = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);

export const contactSchema = yup.object().shape({
  name: yup.string().matches(nameRegExp).min(2).required(),
  number: yup.string().phone().required(),
});