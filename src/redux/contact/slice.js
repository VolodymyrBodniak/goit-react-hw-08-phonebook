import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './thunks';
import {
  handleFulfilledCreateContacts,
  handleFulfilledDeleteContacts,
  handleFulfilledGetContacts,
} from './helpers';

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledGetContacts)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreateContacts)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContacts);
  },
});

export const reducerContact = slice.reducer;
export const {
  addContactAction,
  removeContactAction,
  getFilteredContactsAction,
} = slice.actions;
