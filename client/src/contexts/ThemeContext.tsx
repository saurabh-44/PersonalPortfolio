import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      
      // Check user system preference
      const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      return savedTheme || (userPrefersDark ? "dark" : "light");
    }
    
    return "light";
  });

  // Update theme class on document and store preference
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
