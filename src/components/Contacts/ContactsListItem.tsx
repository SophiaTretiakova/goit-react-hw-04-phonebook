import React from 'react';
import { Contact } from '../App';

export const ContactsListItem: React.FC<{
  contact: Contact;
  onDeleteContact: () => void;
}> = ({ contact: { name, number }, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
};
