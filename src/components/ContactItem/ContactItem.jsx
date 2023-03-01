import PropTypes from 'prop-types';

export const ContactItem = ({
  contactData: { name, number, id },
  deleteContact,
}) => {
  return (
    <li id={id}>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
