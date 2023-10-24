import { setFilter } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const getFilterData = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Box noValidate sx={{ mt: 1 }}>
      <TextField
        fullWidth
        type="text"
        name="filter"
        onChange={getFilterData}
        label="Find contacts by Name"
        id="outlined-basic"
        variant="outlined"
      />
    </Box>
  );
};

export default Filter;
