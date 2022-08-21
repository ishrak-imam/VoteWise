import React from 'react';
import {render, fireEvent, waitFor} from 'src/utils/testUtil';
import {MnemonicScreen} from '@ui/screens/MnemonicScreen';

const mockSeed =
  'faint topic zebra dream hurry someone twice usage stable cousin mandate leader';

jest.mock('@polkadotApi/useCryptoUtil', () => ({
  useCryptoUtil: () => ({
    generateMnemonic: () => Promise.resolve({mnemonic: mockSeed}),
  }),
}));

describe('Mnemonic screen component', () => {
  it('should render generated seed on the screen', async () => {
    const {findByRole, findByText} = render(<MnemonicScreen />);
    const generateSeedButton = await findByRole('button');

    await waitFor(() => {
      fireEvent.press(generateSeedButton);
    });

    await findByText(mockSeed);
  });
});