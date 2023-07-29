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

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactsForm />

      <SubTitle>Contacts</SubTitle>
      {items.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>
          Your phonebook is empty. Add first contact!
        </Wrapper>
      )}
      {items.length > 0 && <ContactList />}
    </Container>
  );
};

export default App;
