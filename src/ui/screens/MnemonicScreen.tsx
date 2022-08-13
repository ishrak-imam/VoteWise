import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@ui/library';
import {useCryptoUtil} from '@polkadotApi/useCryptoUtil';
import {SafeView} from '@ui/components/SafeView';

export function MnemonicScreen() {
  const {generateMnemonic} = useCryptoUtil();

  const generateSeed = React.useCallback(() => {
    generateMnemonic().then(console.log);
  }, [generateMnemonic]);

  return (
    <SafeView>
      <View style={styles.container}>
        <Button onPress={generateSeed}>Generate seed</Button>
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
