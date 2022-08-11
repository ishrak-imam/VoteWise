import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {PolkadotApiWebView} from '../polkadotApi/PolkadotApiWebView';
import {useCryptoUtil} from '../polkadotApi/useCryptoUtil';

export function MnemonicScreen() {
  const {generateMnemonic} = useCryptoUtil();

  const generateSeed = React.useCallback(() => {
    generateMnemonic().then(console.log);
  }, [generateMnemonic]);

  return (
    <View style={styles.container}>
      <Button title="Generate seed" onPress={generateSeed} />
      <PolkadotApiWebView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
