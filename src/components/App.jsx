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
