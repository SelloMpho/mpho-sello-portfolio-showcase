import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDarkMode } from '@/hooks/use-dark-mode';

const DarkModeToggle = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="relative overflow-hidden transition-all duration-300 hover:bg-accent/10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
        }`}
      >
        <Moon className="h-5 w-5" />
      </div>
      <div 
        className={`flex items-center justify-center transition-all duration-500 ${
          isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
        }`}
      >
        <Sun className="h-5 w-5" />
      </div>
    </Button>
  );
};

export default DarkModeToggle;