import React from 'react';
import MaterialIcons, {
  default as VectorIcon,
} from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@ui/library';

type IconProps = {
  name: typeof MaterialIcons['name'];
  size?: number;
  color?: string;
};

export function Icon({name, color, size = 30}: IconProps) {
  const {colors} = useTheme();

  return (
    <VectorIcon name={name} size={size} color={color ?? colors.onSurface} />
  );
}
