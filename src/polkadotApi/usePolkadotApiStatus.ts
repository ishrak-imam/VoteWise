import {useRecoilValue} from 'recoil';
import {apiStatusState} from './atoms';

export function usePolkadotApiStatus() {
  const status = useRecoilValue(apiStatusState);

  return {
    status,
  };
}
