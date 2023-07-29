import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  Button,
  Input,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { selectContacts } from 'redux/selectors';
export const ContactsForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  //==========
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  //==========
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  //===============
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();

    const { value } = evt.target.elements.name;
    const { value: number } = evt.target.elements.number;
    const isInContacts = items.some(
      ({ name }) =>
        name.toLowerCase() === value.toLowerCase(),
    );
    if (isInContacts) {
      alert(`${value} is already in contacts`);
      return;
    }
    const newObj = {
      id: nanoid(),
      name: value,
      number: number,
    };
    dispatch(addContact(newObj));

    evt.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            // value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={handleChange}
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            // value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};
