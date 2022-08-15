import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@ui/library';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackNavigation} from '@navigation/types';
import {mnemonicScreen} from '@navigation/routeKeys';
import {SafeView} from '@ui/components/SafeView';
import {Padder} from '@ui/components/Padder';
import {useStartTx} from '@context/TxContext';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackNavigation, 'Home'>;
};

export function HomeScreen({navigation}: Props) {
  const {startTx} = useStartTx();

  return (
    <SafeView>
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate(mnemonicScreen);
          }}>
          Mnemonic screen
        </Button>
        <Padder />
        <Button
          mode="contained"
          onPress={() => {
            startTx();
          }}>
          Start Tx
        </Button>
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