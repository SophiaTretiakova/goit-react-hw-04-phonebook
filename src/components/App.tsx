import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
import { useState, useEffect } from 'react';
import { NewContact } from './PhoneBook/PhoneBook';

export type Contact = {
  id: string;
  name: string;
  number: string;
};

export const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const lsData = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(lsData ? lsData : '');
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const addContact = (newContact: NewContact) => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('Contact with the same name already exists.');
      return;
    }
    localStorage.setItem(
      'contacts',
      JSON.stringify([...contacts, { id: nanoid(), ...newContact }])
    );
    setContacts([...contacts, { id: nanoid(), ...newContact }]);
  };

  const handleDeleteContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    setFilter(evt.currentTarget.value);
  };

  const getFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  const filteredContacts = getFilterContacts();
  return (
    <>
      <Section title="Phone book">
        <PhoneBook addNewContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter handleChange={handleChange} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
        {filteredContacts.length === 0 && <p>No contacts are available</p>}
      </Section>
      <GlobalStyles />
    </>
  );
};
