import { useState } from 'react';
import Button from './Button';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      setStoredValue(prev => {
        const newValue = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

const Counter: React.FC = () => {
  const [count, setCount] = useLocalStorage<number>('counter', 0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>شمارشگر</h2>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>{count}</div>
      <div>
        <Button onClick={() => setCount(c => c + 1)}>افزایش</Button>
        <Button onClick={() => setCount(c => c - 1)}>کاهش</Button>
        <Button onClick={() => setCount(0)}>بازنشانی</Button>
      </div>
    </div>
  );
};

export default Counter;