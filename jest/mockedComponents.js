import React from 'react';

jest.mock('@ui/components/QRScanner', () => ({
  QRScanner: () => <></>,
}));
