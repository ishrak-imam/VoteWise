import React from 'react';
import {NavigationContainer as RNnavigationContainer} from '@react-navigation/native';

type Props = {
  children: React.ReactNode;
};

export function NavigationContainer({children}: Props) {
  return <RNnavigationContainer>{children}</RNnavigationContainer>;
}
