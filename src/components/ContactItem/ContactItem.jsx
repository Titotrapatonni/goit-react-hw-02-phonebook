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
