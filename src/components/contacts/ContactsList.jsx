import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContacstList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(deleteContact(id));

    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();

      return items.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(normalizedFilter),
      );
    };
    const visibleContacts = getVisibleContacts();
    console.log(visibleContacts);
  };
  return (
    <List>
      {items.map(({ name, number, id }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(id)}
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
