import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ checkExistingContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    checkExistingContact(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Phone
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  checkExistingContact: PropTypes.func.isRequired,
};
