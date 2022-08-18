import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui/library';
import {useCryptoUtil} from '@polkadotApi/useCryptoUtil';
import {SafeView} from '@ui/components/SafeView';
import {Padder} from '@ui/components/Padder';

export function MnemonicScreen() {
  const [mnemonic, setMnemonic] = React.useState('');
  const {generateMnemonic} = useCryptoUtil();

  const generateSeed = React.useCallback(() => {
    generateMnemonic().then(result => {
      setMnemonic(result.mnemonic);
    });
  }, [generateMnemonic]);

  return (
    <SafeView>
      <View style={styles.container}>
        <Button onPress={generateSeed} mode="contained">
          Generate seed
        </Button>
        <Padder scale={2} />
        {/* <TextInput
          label="Mnemonic"
          mode="outlined"
          disabled
          value={mnemonic}
          style={styles.fullWidth}
          multiline
        /> */}
        <Text variant="bodySmall">{mnemonic}</Text>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  // fullWidth: {
  //   width: '100%',
  // },
});
