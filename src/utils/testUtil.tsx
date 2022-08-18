/* eslint-disable no-restricted-imports */
import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '@context/ThemeContext';
import {RecoilRoot} from 'recoil';
import {ApiClientProvider} from '@context/ApiContext';

function Providers({children}: {children: React.ReactNode}) {
  return (
    <RecoilRoot>
      <ApiClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ApiClientProvider>
    </RecoilRoot>
  );
}

function customRender(ui: React.ReactElement) {
  return render(ui, {wrapper: Providers});
}

export * from '@testing-library/react-native';
export {customRender as render};
