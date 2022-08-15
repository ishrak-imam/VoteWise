import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout} from '@ui/components/Layout';

type Props = {
  children: React.ReactNode;
};

export function SafeView({children}: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Layout>{children}</Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
