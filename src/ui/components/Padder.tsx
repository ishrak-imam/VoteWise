import React from 'react';
import {View} from 'react-native';

type Props = {
  scale?: number;
};

export function Padder({scale = 1}: Props) {
  return <View style={{padding: 8 * scale}} />;
}
