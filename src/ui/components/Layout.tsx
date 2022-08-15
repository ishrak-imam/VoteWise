import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@ui/library';

type Props = {
  children: React.ReactNode;
};

export function Layout({children}: Props) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
