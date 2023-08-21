import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

const Spiner = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    isLoading && (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    )
  );
};

export default Spiner;
