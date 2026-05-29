import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/use-dark-mode';

const DarkModeToggle = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to luxury light theme' : 'Switch to cinematic dark theme'}
      className="luxury-toggle group"
    >
      <span className="luxury-toggle-thumb">
        <Sun
          className={`absolute h-3.5 w-3.5 text-[hsl(28_35%_12%)] transition-all duration-500 ${
            isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute h-3.5 w-3.5 text-[hsl(36_50%_88%)] transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
          }`}
        />
      </span>
    </button>
  );
};

export default DarkModeToggle;
