import { useEffect } from 'react';

// Cinematic portfolio is locked to dark theme.
export const useDarkMode = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return { isDark: true, toggle: () => {} };
};
