import React from 'react';
import {PolkadotApiWebView} from '@polkadotApi/PolkadotApiWebView';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from '@navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <AppNavigator />
        <PolkadotApiWebView />
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
