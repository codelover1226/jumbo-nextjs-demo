import { OnboardingProvider } from '@app/_components/onboarding';
import {
  Onboarding2Config,
  steps,
} from '@app/_components/onboarding/onboarding-2';
import { CONTAINER_MAX_WIDTH } from '@app/_config/layouts';
import { Container } from '@mui/material';

const OnboardingPage2 = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: CONTAINER_MAX_WIDTH,
        display: 'flex',
        minWidth: 0,
        flex: 1,
        flexDirection: 'column',
      }}
      disableGutters
    >
      <OnboardingProvider initSteps={steps}>
        <Onboarding2Config />
      </OnboardingProvider>
    </Container>
  );
};

export default OnboardingPage2;
