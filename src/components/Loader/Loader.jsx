import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#6658d3"
      wrapperStyle={{
        marginTop: '200px',
        marginLeft: '50%',
        position: 'absolute',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#c4bfe9"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
