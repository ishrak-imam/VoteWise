import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackNavigation} from '@navigation/types';
import {mnemonicScreen} from '@navigation/routeKeys';
import {SafeView} from '@ui/components/SafeView';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackNavigation, 'Home'>;
};

export function HomeScreen({navigation}: Props) {
  return (
    <SafeView>
      <View style={styles.container}>
        <Button
          title="Go to mnemonic"
          onPress={() => {
            navigation.navigate(mnemonicScreen);
          }}
        />
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
