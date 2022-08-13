import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@ui/library';

type Props = {
  children: React.ReactNode;
};

export function SafeView({children}: Props) {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
