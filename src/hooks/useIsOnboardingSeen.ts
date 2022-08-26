import {usePersistedState} from '@hooks/usePersistedState';

export function useIsOnboardingSeen() {
  const [isOnboardingSeen, setIsOnboardingSeen] = usePersistedState('onboarding_seen', false);

  return {
    isOnboardingSeen,
    setIsOnboardingSeen,
  };
}
