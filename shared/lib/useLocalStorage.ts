import { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * Custom hook that synchronizes a numeric state with localStorage.
 * @param key The localStorage key to use.
 * @param defaultValue The initial value if no stored value exists.
 * @returns [value, setter] where setter accepts a number or a function returning a number.
 */
export function useLocalStorageNumber(
  key: string,
  defaultValue: number = 0
): [number, Dispatch<SetStateAction<number>>] {
  const [state, setState] = useState<number>(() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? parseInt(item, 10) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, String(state));
    } catch {
      // fail silently or log
    }
  }, [key, state]);

  return [state, setState];
}

/**
 * Hook specifically for the counter value.
 */
export function useCounterLocalStorage(): [
  number,
  Dispatch<SetStateAction<number>>
] {
  return useLocalStorageNumber('counter-value', 0);
}