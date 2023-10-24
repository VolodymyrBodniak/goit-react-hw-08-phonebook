const { Typography, Box } = require('@mui/material');

const Home = () => {
  return (
    <Box
      sx={{
        width: 500,
        margin: '0 auto',
        marginTop: '100px',
        padding: '10px',
      }}
    >
      <Typography variant="h5" color="#000" textAlign="center">
        Welcome to Phonebook App. Here you can create a new account (or login if
        you already have an account) and save your contacts.
      </Typography>
    </Box>
  );
};

export default Home;
