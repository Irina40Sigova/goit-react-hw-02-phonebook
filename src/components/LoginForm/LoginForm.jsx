import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { FormEl, Err } from './LoginForm.styled';
import * as yup from 'yup';

const userSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const LoginForm = ({ addContact }) => {
  const handeleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handeleSubmit}
      validationSchema={userSchema}
    >
      <FormEl>
        <label>
          Name
          <Field type="text" name="name" />
          <Err name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <Err name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};

LoginForm.propTypes = {
  addContact: PropTypes.func,
};
