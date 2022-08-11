import {atom, useRecoilState, RecoilState} from 'recoil';
import {persistAtom} from './persist';

export type SupportedNetworkType = 'polkadot' | 'kusama';

export type NetworkType = {
  name: string;
  key: SupportedNetworkType;
  ws: string[];
  color?: string;
  ss58Format: number;
};

const polkadotNetwork: NetworkType = {
  name: 'Polkadot',
  key: 'polkadot',
  ws: ['wss://rpc.polkadot.io'],
  color: '#800000',
  ss58Format: 0,
};

// const kusamaNetwork: NetworkType = {
//   name: 'Kusama',
//   key: 'kusama',
//   ws: ['wss://kusama.api.onfinality.io/public-ws'],
//   color: '#e6194B',
//   ss58Format: 2,
// };

export const networkState: RecoilState<NetworkType> = atom({
  key: 'networkState',
  default: polkadotNetwork,
  effects: [persistAtom],
});

export function useNetwork() {
  const [currentNetwork, selectCurrentNetwork] = useRecoilState(networkState);

  return {
    currentNetwork,
    selectCurrentNetwork,
  };
}
