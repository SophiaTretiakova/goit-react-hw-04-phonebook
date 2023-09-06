import { ContactsListItem } from './ContactsListItem';
import propTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
};
