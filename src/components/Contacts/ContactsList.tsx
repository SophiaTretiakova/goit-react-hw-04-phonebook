import { ContactsListItem } from './ContactsListItem';
import React from 'react';
import { Contact } from '../App';

export const ContactsList: React.FC<{
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
}> = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact: Contact) => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
