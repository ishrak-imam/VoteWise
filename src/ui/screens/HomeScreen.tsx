import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui/library';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackNavigation} from '@navigation/types';
import {mnemonicScreen} from '@navigation/routeKeys';
import {SafeView} from '@ui/components/SafeView';
import {Padder} from '@ui/components/Padder';
import {useStartTx} from '@context/TxContext';
import {usePolkadotApiStatus} from '@polkadotApi/usePolkadotApiStatus';
import {useNetInfo} from '@hooks/useNetInfo';
import {useToggleTheme} from '@context/ThemeContext';
import {useDialog} from '@context/DialogContext';

type Props = {
  navigation: NativeStackNavigationProp<HomeStackNavigation, 'Home'>;
};

export function HomeScreen({navigation}: Props) {
  const {startTx} = useStartTx();

  const {isConnected} = useNetInfo();
  const {status} = usePolkadotApiStatus();
  const {toggleTheme} = useToggleTheme();
  const {showDialog} = useDialog();

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

        <Padder />
        <Button
          mode="contained"
          onPress={() => {
            toggleTheme();
          }}>
          Toggle theme
        </Button>

        <Padder />
        <Button
          mode="contained"
          onPress={() => {
            showDialog({
              content: 'Dialog content',
              onCancelPress: () => {
                console.log('execute on cancel press...');
              },
              onOkPress: () => {
                console.log('execute on ok press...');
              },
            });
          }}>
          Show dialog
        </Button>

        <Padder />
        <Text>Polkadot API status : {status}</Text>
        <Text>Network status : {isConnected ? 'connected' : 'disconnected'}</Text>
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
