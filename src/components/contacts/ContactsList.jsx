import React from 'react';

import { List, Item, Button } from './ContacstList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const contacts = useSelector(state => {
        const normalizedFilter = filter.toLowerCase();
        console.log(state.app.contacts.items);
        return state.app.contacts.items.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(normalizedFilter),
        );
    });
    const onRemoveContact = id => {
        dispatch(deleteContact(id));
    };
    return (
        <List>
            {contacts.map(({ name, number, id }) => (
                <Item key={id}>
                    {name + ' : ' + number}
                    {
                        <Button
                            type="button"
                            name="delete"
                            onClick={() =>
                                onRemoveContact(id)
                            }
                        >
                            delete
                        </Button>
                    }
                </Item>
            ))}
        </List>
    );
};

export default ContactList;
