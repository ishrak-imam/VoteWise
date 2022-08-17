import React from 'react';
import {View} from 'react-native';
import {standardPadding} from '@ui/styles';

type Props = {
  scale?: number;
};

export function Padder({scale = 1}: Props) {
  return <View style={{padding: standardPadding * scale}} />;
}
