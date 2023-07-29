import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactsForm } from './contactsForm/ContactsForm';
import ContactList from './contacts/ContactsList';
import Filter from './Filter/Filter';
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
} from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const App = () => {
  const { items } = useSelector(selectContacts);

  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  // const visibleContacts = getVisibleContacts();

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const removeContact = contactId => {
  //   setContacts(contacts.filter(({ id }) => id !== contactId));
  // };

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactsForm />

      <SubTitle>Contacts</SubTitle>
      {items.length > 0 ? (
        <Filter
          // value={filter}
          // onChangeFilter={changeFilter}
        />
      ) : (
        <Wrapper>
          Your phonebook is empty. Add first contact!
        </Wrapper>
      )}
      {items.length > 0 && (
        <ContactList
        // contacts={visibleContacts}
        // onRemoveContact={removeContact}
        />
      )}
    </Container>
  );
};

export default App;
