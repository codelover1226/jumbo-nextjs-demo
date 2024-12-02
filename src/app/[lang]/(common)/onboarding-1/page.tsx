import { OnboardingProvider } from '@app/_components/onboarding';
import {
  Onboarding1Config,
  steps,
} from '@app/_components/onboarding/onboarding-1';

const OnboardingPage1 = () => {
  return (
    <OnboardingProvider initSteps={steps}>
      <Onboarding1Config />
    </OnboardingProvider>
  );
};
export default OnboardingPage1;
