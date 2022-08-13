import React from 'react';
import {PolkadotApiWebView} from '@polkadotApi/PolkadotApiWebView';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from '@navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from '@context/ThemeContext';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <SafeAreaProvider>
          <AppNavigator />
          <PolkadotApiWebView />
        </SafeAreaProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
