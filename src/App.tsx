import React from 'react';
import {PolkadotApiWebView} from '@polkadotApi/PolkadotApiWebView';
import {RecoilRoot} from 'recoil';
import AppNavigator from '@navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@context/ThemeContext';
import {NavigationContainer} from '@navigation/NavigationContainer';
import {ErrorBoundary} from '@ui/components/ErrorBoundary';
import {TxProvider} from '@context/TxContext';
import {ApiClientProvider} from '@context/ApiContext';
import {SnackbarProvider} from '@context/SnackBarContext';

export default function App() {
  return (
    <RecoilRoot>
      <ApiClientProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <ErrorBoundary>
                <SnackbarProvider>
                  <TxProvider>
                    <AppNavigator />
                    <PolkadotApiWebView />
                  </TxProvider>
                </SnackbarProvider>
              </ErrorBoundary>
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </ApiClientProvider>
    </RecoilRoot>
  );
}
