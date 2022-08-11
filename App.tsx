import React from 'react';
import {RecoilRoot} from 'recoil';
import {MnemonicScreen} from './src/screens/MnemonicScreen';

export default function App() {
  return (
    <RecoilRoot>
      <MnemonicScreen />
    </RecoilRoot>
  );
}
