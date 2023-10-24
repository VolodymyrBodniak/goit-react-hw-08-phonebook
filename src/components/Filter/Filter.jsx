// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from 'redux/filter/filterSlice';
// import { TextField } from '@mui/material';
// // import css from './Filter.module.css';

// const Filter = () => {
//   const { filter } = useSelector(state => state.filter);
//   const dispatch = useDispatch();

//   const handleFilterChange = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   return (
//     <div className={css.filterForm}>
//       <TextField
//         label="Find contacts by name"
//         variant="outlined"
//         value={filter}
//         onChange={handleFilterChange}
//         placeholder="Search..."
//         fullWidth
//       />
//     </div>
//   );
// };

// export default Filter;

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
