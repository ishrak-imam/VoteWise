import Keychain from 'react-native-keychain';

const KEYCHAIN_USER = 'VoteWise_User';
const BASE_SERVICE = 'com.VoteWise';

export function setPassword(password: string, serviceId: string) {
  return Keychain.setGenericPassword(KEYCHAIN_USER, password, {
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
    authenticationType: Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
    securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
    storage: Keychain.STORAGE_TYPE.AES,
    service: `${BASE_SERVICE}-${serviceId}`,
  });
}

export function getPassword(serviceId: string) {
  return Keychain.getGenericPassword({
    service: `${BASE_SERVICE}-${serviceId}`,
  });
}

export function resetPassword(serviceId: string) {
  return Keychain.resetGenericPassword({
    service: `${BASE_SERVICE}-${serviceId}`,
  });
}
