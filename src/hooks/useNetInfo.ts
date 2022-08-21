import {useNetInfo as RnUseNetInfo} from '@react-native-community/netinfo';

export function useNetInfo() {
  const {isConnected} = RnUseNetInfo();

  return {
    isConnected: Boolean(isConnected),
  };
}
