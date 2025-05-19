import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  isMobile?: boolean;
}

const ThemeToggle = ({ isMobile = false }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border transition-all ${
        isMobile
          ? theme === 'dark' 
            ? "bg-blue-900/20 border-blue-700/30 text-white hover:bg-blue-800/30" 
            : "bg-blue-100 border-blue-200 text-blue-800 hover:bg-blue-200"
          : theme === 'dark'
            ? "bg-slate-800 border-slate-700 text-gray-200 hover:bg-slate-700"
            : "bg-white border-gray-200 text-gray-800 hover:bg-gray-100"
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
