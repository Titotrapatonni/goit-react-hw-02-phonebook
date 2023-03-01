import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

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

  // <ContactItem contactData={contacts}></ContactItem>;
};
