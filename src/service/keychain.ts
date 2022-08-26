import Keychain from 'react-native-keychain';

const KEYCHAIN_USER = 'VoteWise_User';
const BASE_SERVICE = 'com.VoteWise';

export enum ACCESS_CONTROL {
  BIOMETRY = 'BIOMETRY_CURRENT_SET',
  PASSCODE = 'DEVICE_PASSCODE',
}

export function setPassword(password: string, accessControl: ACCESS_CONTROL, serviceId: string) {
  return Keychain.setGenericPassword(KEYCHAIN_USER, password, {
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    accessControl: Keychain.ACCESS_CONTROL[accessControl],
    storage: Keychain.STORAGE_TYPE.AES,
    service: `${BASE_SERVICE}-${serviceId}`,
  });
}

export function getPassword(serviceId: string) {
  console.log(`${BASE_SERVICE}-${serviceId}`);
  return Keychain.getGenericPassword({service: `${BASE_SERVICE}-${serviceId}`});
}
