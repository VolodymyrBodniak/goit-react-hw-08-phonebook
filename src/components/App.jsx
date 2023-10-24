// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import css from './ContainerForm.module.css';
// import { Loader } from './Loader/Loader';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAppState } from 'redux/app/selectors';
// import { useEffect } from 'react';
// import { getAllContactsThunk } from 'redux/contact/thunks';

// const App = () => {
//   const { isLoading, error } = useSelector(selectAppState);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllContactsThunk());
//   }, [dispatch]);

//   return (
//     <>
//       <>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className={css.containerForm}>
//             {error ? (
//               <h1>Oooops! Something get wrong</h1>
//             ) : (
//               <>
//                 <h1>Phonebook</h1>
//                 <ContactForm />
//                 <h2>Contacts</h2>
//                 <div>
//                   <Filter />
//                   <ContactList />
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </>
//     </>

//     // <div className={css.containerForm}>
//     //   <h1>Phonebook</h1>
//     //   <ContactForm />
//     //   <h2>Contacts</h2>
//     //   <Filter />
//     //   <ContactList />
//     // </div>
//   );
// };

// export default App;

import Layout from 'Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PrivateRoutes from 'guards/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'guards/PublicRoutes/PublicRoutes';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import { Loader } from './Loader/Loader';
import { theme } from 'theme/theme';
import Error from './Error/Error';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Error />
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoutes>
                <Contacts />
              </PrivateRoutes>
            }
          />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
