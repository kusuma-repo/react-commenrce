import SpinnerLoading from '../spinner.component/Spinner.component';

const LoadingSpinner = (WrappedComponet) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <SpinnerLoading /> : <WrappedComponet {...otherProps} />;
  };
  return Spinner;
};

export default LoadingSpinner;
