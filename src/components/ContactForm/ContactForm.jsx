import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createContactThunk } from 'redux/contact/thunks';
// import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const idName = nanoid();
  const idNumber = nanoid();

  const handleSetValue = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const addContact = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }
    const newContact = {
      name,
      phone: number,
      id: nanoid(),
    };
    dispatch(createContactThunk(newContact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={addContact}>
      <label htmlFor={idName}>Name</label>
      <input
        id={idName}
        onChange={handleSetValue}
        type="text"
        name="name"
        required
        value={name}
      />
      <label htmlFor={idNumber}>Number</label>
      <input
        id={idNumber}
        onChange={handleSetValue}
        type="tel"
        name="number"
        required
        value={number}
      />
      <Button variant="contained" type="submit">
        Add contact
      </Button>
      {/* <button type="submit" className={css.btn}>
        Add contact
      </button> */}
    </form>
  );
};

export default ContactForm;
