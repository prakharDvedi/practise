'use client';
import { use, useEffect, useState } from 'react';
import styles from './button.module.css';

export default function Button({ number }: { number: number }) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem('user_Count');
    const parsed = Number(stored);
    if (Number.isFinite(parsed)) {
      setCount(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user_Count', String(count));
  }, [count]);

  return (
    <button className={styles.button} onClick={() => setCount(c => c + 1)}>
      Button {number} - Clicked {count} times
    </button>
  );
}
