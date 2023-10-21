import axios from 'axios';

axios.defaults.baseURL = 'https://652c5667d0d1df5273ef5e2f.mockapi.io';

export const getAllContacts = async () => {
  return (await axios.get('/contacts')).data;
};

export const createContact = async data => {
  return (await axios.post('/contacts', data)).data;
};

export const deleteContact = async id => {
  return (await axios.delete(`/contacts/${id}`)).data;
};
