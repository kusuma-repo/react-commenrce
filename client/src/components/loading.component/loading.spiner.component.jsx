import {
  SpinnerOverlay,
  SpinnerContainer,
} from './loading.spiner.component.styles';

const LoadingSpinner = (WrappedComponet) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponet {...otherProps} />
    );
  };
  return Spinner;
};

export default LoadingSpinner;
