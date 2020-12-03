import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';

const SpinnerLoading = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default SpinnerLoading;
