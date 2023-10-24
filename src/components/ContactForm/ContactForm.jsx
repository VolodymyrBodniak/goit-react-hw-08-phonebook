// import { useState } from 'react';
// // import css from './ContactForm.module.css';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { createContactThunk } from 'redux/contact/thunks';
// import { Button, TextField, Box } from '@mui/material';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSetValue = event => {
//     const { name, value } = event.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const addContact = event => {
//     event.preventDefault();
//     if (name.trim() === '' || number.trim() === '') {
//       alert('Please enter both name and number.');
//       return;
//     }
//     const newContact = {
//       name,
//       phone: number,
//       id: nanoid(),
//     };
//     dispatch(createContactThunk(newContact));
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Box component="form" onSubmit={addContact} noValidate sx={{ mt: 1 }}>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         autoComplete="off"
//         onChange={handleSetValue}
//         value={name}
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="outlined-basic"
//         label="Number"
//         variant="outlined"
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         autoComplete="off"
//         onChange={handleSetValue}
//         value={number}
//       />
//       <Button variant="contained" type="submit" sx={{ mt: 3, mb: 2 }}>
//         Add contact
//       </Button>
//     </Box>
//   );
// };

// export default ContactForm;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { createContactThunk } from 'redux/contact/thunks';
import { nanoid } from '@reduxjs/toolkit';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    const isTrue = contacts.some(contact => name === contact.name);
    if (isTrue) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(createContactThunk({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  const getContactData = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  return (
    <Box component="form" onSubmit={addContact} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
        value={name}
        onChange={getContactData}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-basic"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        autoComplete="off"
        onChange={getContactData}
        value={number}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};
export default ContactForm;
