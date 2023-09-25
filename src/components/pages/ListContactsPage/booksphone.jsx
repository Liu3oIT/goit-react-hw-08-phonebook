import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/FormForContact/form';
import css from './booksphone.module.css';

import 'react-toastify/dist/ReactToastify.css';

import { ListFilter, setFilter } from 'redux/filterSlise';
import {  selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';



const BookPhones = () => {
 
  const filteredContacts = useSelector(selectFilteredContacts);
  const filter = useSelector(ListFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFindContact = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };

  const deletePhone = contactId => {
    dispatch(deleteContact(contactId));
  };


  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <div className={css.container}>
        <h2 className={css.title_contact}>Contacts</h2>

        <label className={css.find_contact} htmlFor="filter">
          Find contacts by name
          <input
            className={css.input_find}
            type="text"
            name="filter"
            id="filter"
            value={filter}
            onChange={handleFindContact}
          />
        </label>

        <ul>
          {filteredContacts?.map(({ id, name, number }) => (
            <li className={css.list_contact} key={id}>
              <p className={css.info_contact}>{name}</p>
              <p className={css.info_contact}>{number}</p>
             
              <button
                className={css.button_delet_contact}
                type="button"
                onClick={() => deletePhone(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookPhones;
