import { useState, useEffect } from "react";

// 🔹 Funcție pentru inițializarea din `localStorage`
const init = (key, initialValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (error) {
    console.error("Eroare la citirea din localStorage:", error);
    return initialValue;
  }
};

export function useLocalStorage(key, initialValue) {
  // 🔹 Inițializăm state-ul folosind `init()`
  const [state, setState] = useState(() => init(key, initialValue));

  // 🔹 Salvăm automat în `localStorage` când `state` se schimbă
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
