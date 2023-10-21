import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, getAllContacts } from 'api/api';

export const getAllContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
