// import { Oval } from 'react-loader-spinner';

// export const Loader = () => {
//   return (
//     <Oval
//       height={80}
//       width={80}
//       color="#6658d3"
//       wrapperStyle={{
//         marginTop: '200px',
//         marginLeft: '50%',
//         position: 'absolute',
//       }}
//       wrapperClass=""
//       visible={true}
//       ariaLabel="oval-loading"
//       secondaryColor="#c4bfe9"
//       strokeWidth={2}
//       strokeWidthSecondary={2}
//     />
//   );
// };

import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppState } from 'redux/app/selectors';

export const Loader = () => {
  const { isLoading } = useSelector(selectAppState);
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
