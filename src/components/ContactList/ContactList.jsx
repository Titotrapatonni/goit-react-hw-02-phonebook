import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        contact.id = nanoid();
        return (
          <ContactItem
            contactData={contact}
            key={contact.id}
            deleteContact={deleteContact}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
