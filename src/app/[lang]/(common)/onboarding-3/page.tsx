'use client';
import { OnboardingProvider } from '@app/_components/onboarding';
import {
  Onboarding3Config,
  sidebarSteps,
  steps,
} from '@app/_components/onboarding/onboarding-3';

const OnboardingPage3 = () => {
  return (
    <OnboardingProvider initSteps={steps} initSidebarSteps={sidebarSteps}>
      <Onboarding3Config />
    </OnboardingProvider>
  );
};
export default OnboardingPage3;
