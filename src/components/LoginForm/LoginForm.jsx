import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { FormEl, Err } from './LoginForm.styled';
import * as yup from 'yup';

const userSchema = yup.object({
  name: yup.string().min(3, 'Too Short!').max(15, 'Too Long!').required(),
  number: yup.string().min(6, 'Too Short!').max(15, 'Too Long!').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const LoginForm = ({ addContact, state }) => {
  const handeleSubmit = (values, { resetForm }) => {
    // console.log(values);
    let data = state.contacts.find(e => e.name === values.name);

    if (data === undefined) {
      resetForm();

      addContact(values);
    } else {
      alert(`"${values.name}" is alredy in contacts`, '', 'warning');
    }
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
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Err name="name" component="div" />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Err name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
