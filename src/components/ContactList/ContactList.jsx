import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contact/thunks';
import { filteredContacts } from 'redux/contact/selectors';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

const ContactList = () => {
  const filteredContactsData = useSelector(filteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {filteredContactsData.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {contact.name}: {contact.phone}
          <Button
            variant="contained"
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </Button>
          {/* <button
            type="button"
            className={css.btn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
