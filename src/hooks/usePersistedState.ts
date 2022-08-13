import {useState, useCallback} from 'react';
import {setItem, getItem} from '@service/persistedStore';

export type PersistedStateKey = 'theme';

export function usePersistedState<T>(
  key: PersistedStateKey,
): [T | undefined, (newState: T) => void];
export function usePersistedState<T>(
  key: PersistedStateKey,
  initialState: T,
): [T, (newState: T) => void];

export function usePersistedState<T>(
  key: PersistedStateKey,
  initialState?: T,
): [state: T | undefined, setState: (data: T) => void] {
  const [state, setState] = useState(() => getItem<T>(key) ?? initialState);

  const persistState = useCallback(
    (newState: T) => {
      try {
        setState(newState);
        setItem(key, newState);
      } catch (error) {
        console.error(`Error persisting key "${key}"`, error);
      }
    },
    [key],
  );

  return [state, persistState];
}
