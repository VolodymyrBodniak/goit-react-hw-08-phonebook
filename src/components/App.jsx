import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './ContainerForm.module.css';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppState } from 'redux/app/selectors';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'redux/contact/thunks';

const App = () => {
  const { isLoading, error } = useSelector(selectAppState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={css.containerForm}>
            {error ? (
              <h1>Oooops! Something get wrong</h1>
            ) : (
              <>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <div>
                  <Filter />
                  <ContactList />
                </div>
              </>
            )}
          </div>
        )}
      </>
    </>

    // <div className={css.containerForm}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};

export default App;
