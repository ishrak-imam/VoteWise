import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeView} from '@ui/components/SafeView';

export function SettingsScreen() {
  return (
    <SafeView>
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
