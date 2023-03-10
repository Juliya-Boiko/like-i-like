import { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import { ContactsContent, ContactsMap, ContactsForm, ContactsBtn, ContactsInput, ContactsError } from "./Contacts.styled";
//import { contactSchema } from "helpers/schemas";
import Notiflix from 'notiflix';
require("yup-phone");

export const Contacts = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { t } = useTranslation();  

  const detectSize = () => {
    setWindowSize(window.innerWidth);
  };

  const mapWidth = () => {
    if (windowSize >= 600) {
      return 500;
    } else {
      return 300;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowSize ]);

  const submitHandler = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    Notiflix.Notify.success(`Dear ${values.name}, we will contact you soon`);
  };

  return (
    <ContactsContent>
      <ContactsMap
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3816716564615!2d30.620339815776624!3d50.43399107947318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c569ae705387%3A0x63844605be723e7!2z0KDQtdCz0LXQvdC10YDQsNGC0L7RgNC90LDRjyA0LCDQmtC-0YDQv9GD0YEgNywgNCwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sbg!4v1673373097298!5m2!1sru!2sbg"
        width={mapWidth()}
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></ContactsMap>
    <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={submitHandler}
        // validationSchema={contactSchema}
      >
        {props => (
          <ContactsForm>
            <ContactsInput
              type="text"
              name="name"
              placeholder={t('name')}
              onChange={props.handleChange}
              value={props.values.name} />
            <ErrorMessage name="name" render={msg => <ContactsError>{msg}</ContactsError>} />
            <ContactsInput
              id="number"
              name="number"
              type="tel"
              placeholder="+38 050 111 11 11"
            />
            <ErrorMessage name="number" render={msg => <ContactsError>{msg}</ContactsError>} />
            <ContactsBtn type="submit">{t('call_me')}</ContactsBtn>
          </ContactsForm>
        )}
      </Formik>
    </ContactsContent>
  );
};