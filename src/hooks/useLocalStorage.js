import { useState, useEffect, useCallback } from "react";

// Persist a piece of state to localStorage, surviving refreshes.
// Falls back gracefully if storage is unavailable (private mode, SSR).
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore write failures */
    }
  }, [key, value]);

  return [value, setValue];
}

// Helper for a Set-like list stored as an array (e.g. completed lessons).
export function useStoredSet(key) {
  const [list, setList] = useLocalStorage(key, []);
  const has = useCallback((id) => list.includes(id), [list]);
  const add = useCallback((id) => setList((cur) => (cur.includes(id) ? cur : [...cur, id])), [setList]);
  const remove = useCallback((id) => setList((cur) => cur.filter((x) => x !== id)), [setList]);
  const toggle = useCallback((id) => setList((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id])), [setList]);
  return { list, has, add, remove, toggle };
}
