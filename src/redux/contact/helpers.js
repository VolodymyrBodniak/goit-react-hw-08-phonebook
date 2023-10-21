export const handleFulfilledGetContacts = (state, { payload }) => {
  state.contacts = payload;
};
export const handleFulfilledCreateContacts = (state, { payload }) => {
  console.log('payload', payload);
  state.contacts = [...state.contacts, payload];
};
export const handleFulfilledDeleteContacts = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};
