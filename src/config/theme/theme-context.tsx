// context/ThemeContext.tsx
"use client"; // Required for client-side functionality in Next.js

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { ThemeProvider, CssBaseline, Theme } from "@mui/material";
import { lightTheme, darkTheme } from "../theme";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme: Theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  //   setMode(prefersDarkMode.matches ? "dark" : "light");

  //   // Optional: Listen for changes in system preference
  //   prefersDarkMode.addEventListener("change", (e) => {
  //     setMode(e.matches ? "dark" : "light");
  //   });
  // }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
