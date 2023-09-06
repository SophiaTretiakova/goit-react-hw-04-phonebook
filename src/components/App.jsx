import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
      console.log('Contacts loaded from localStorage:', savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('Contacts saved to localStorage:', contacts);
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('Contact with the same name already exists.');
    } else {
      setContacts(prevContacts => {
        return [...prevContacts, { id: nanoid(5), ...newContact }];
      });
    }
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
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
