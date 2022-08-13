import React from 'react';
import {PolkadotApiWebView} from '@polkadotApi/PolkadotApiWebView';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from '@navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@context/ThemeContext';
import {NavigationContainer} from '@navigation/NavigationContainer';
import {ErrorBoundary} from '@ui/components/ErrorBoundary';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <ErrorBoundary>
              <AppNavigator />
              <PolkadotApiWebView />
            </ErrorBoundary>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
