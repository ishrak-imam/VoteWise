import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-mmkv');
jest.mock('react-native-keychain', () => ({
  ACCESSIBLE: {
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: '',
  },
  ACCESS_CONTROL: {
    BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE: '',
  },
  AUTHENTICATION_TYPE: {
    DEVICE_PASSCODE_OR_BIOMETRICS: '',
  },
  SECURITY_LEVEL: {
    SECURE_HARDWARE: '',
  },
  STORAGE_TYPE: {
    AES: '',
  },
  setGenericPassword: jest.fn().mockResolvedValue(),
  getGenericPassword: jest.fn().mockResolvedValue(),
  resetGenericPassword: jest.fn().mockResolvedValue(),
}));
