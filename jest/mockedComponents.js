import React from 'react';

jest.mock('../src/ui/components/QRScanner', () => ({
  QRScanner: () => <></>,
}));
