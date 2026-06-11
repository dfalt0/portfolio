"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type PortfolioTheme = "apple" | "classic";
export type ColorScheme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";
const COLOR_SCHEME_STORAGE_KEY = "portfolio-color-scheme";

type ThemeContextValue = {
  theme: PortfolioTheme;
  colorScheme: ColorScheme;
  setTheme: (theme: PortfolioTheme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleTheme: () => void;
  toggleColorScheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToDocument(theme: PortfolioTheme, colorScheme: ColorScheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);

  if (theme === "classic") {
    root.classList.add("dark");
    root.removeAttribute("data-color-scheme");
    return;
  }

  root.setAttribute("data-color-scheme", colorScheme);
  if (colorScheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function readStoredTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "apple";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "classic" || stored === "apple" ? stored : "apple";
}

function readStoredColorScheme(): ColorScheme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
  return stored === "dark" || stored === "light" ? stored : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>("apple");
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = readStoredTheme();
    const initialColorScheme = readStoredColorScheme();
    applyThemeToDocument(initialTheme, initialColorScheme);
    const frame = requestAnimationFrame(() => {
      setThemeState(initialTheme);
      setColorSchemeState(initialColorScheme);
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const setTheme = useCallback(
    (next: PortfolioTheme) => {
      setThemeState(next);
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyThemeToDocument(next, colorScheme);
    },
    [colorScheme]
  );

  const setColorScheme = useCallback(
    (next: ColorScheme) => {
      setColorSchemeState(next);
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, next);
      if (theme === "apple") {
        applyThemeToDocument("apple", next);
      }
    },
    [theme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "apple" ? "classic" : "apple");
  }, [theme, setTheme]);

  const toggleColorScheme = useCallback(() => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  }, [colorScheme, setColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorScheme,
        setTheme,
        setColorScheme,
        toggleTheme,
        toggleColorScheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
