import {recoilPersist} from 'recoil-persist';
import * as Storage from '@service/persistedStore';

export const {persistAtom} = recoilPersist({
  key: 'recoil-persist',
  storage: Storage,
});
