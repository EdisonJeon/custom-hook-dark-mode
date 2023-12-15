import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
    else return localStorage.setItem(key, JSON.stringify(initialValue));
  });

  const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, setStoredState];
};
