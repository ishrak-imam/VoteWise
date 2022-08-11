import {mmkvStore} from './mmkvStore';

export function getItem<T>(
  key: string,
  defaultValue: T | null = null,
): T | null {
  const item = mmkvStore.getString(key);

  if (item) {
    return JSON.parse(item);
  }

  return defaultValue;
}

export async function setItem(key: string, value: unknown) {
  return mmkvStore.set(key, JSON.stringify(value));
}

export const removeItem = (key: string) => mmkvStore.delete(key);
