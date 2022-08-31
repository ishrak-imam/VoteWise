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
import {DialogProvider} from '@context/DialogContext';
import {useRegisterFCMListeners} from '@hooks/useRegisterFCMListeners';

export default function App() {
  useRegisterFCMListeners();

  return (
    <RecoilRoot>
      <ApiClientProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <ErrorBoundary>
                <SnackbarProvider>
                  <DialogProvider>
                    <TxProvider>
                      <AppNavigator />
                      <PolkadotApiWebView />
                    </TxProvider>
                  </DialogProvider>
                </SnackbarProvider>
              </ErrorBoundary>
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </ApiClientProvider>
    </RecoilRoot>
  );
}
