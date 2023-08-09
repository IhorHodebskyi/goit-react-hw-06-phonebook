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
import { useState } from 'react';

export const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const { items } = useSelector(selectContacts);

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        const newObj = {
            id: nanoid(),
            name: name,
            number: number,
        };
        const isInContacts = items.some(
            ({ name }) =>
                name.toLowerCase() ===
                newObj.name.toLowerCase(),
        );
        if (isInContacts) {
            alert(`${newObj.name} is already in contacts`);
            return;
        }

        dispatch(addContact(newObj));

        reset();
    };
    const reset = () => {
        setName('');
        setNumber('');
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor={nameInputId}>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                    />
                </Label>

                <Label htmlFor={numberInputId}>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                    />
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        </>
    );
};
