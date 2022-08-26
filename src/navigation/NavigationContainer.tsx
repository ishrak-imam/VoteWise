import React from 'react';
import {NavigationContainer as RNnavigationContainer} from '@react-navigation/native';
import {useToggleTheme} from '@context/ThemeContext';
import {darkTheme, lightTheme} from '@navigation/theme';

type Props = {
  children: React.ReactNode;
};

export function NavigationContainer({children}: Props) {
  const {theme} = useToggleTheme();
  return <RNnavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>{children}</RNnavigationContainer>;
}
