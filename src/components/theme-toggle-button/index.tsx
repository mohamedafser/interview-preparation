// components/ThemeToggleButton.tsx
"use client"; // Required for client-side functionality

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "@/config/theme/theme-context";

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={mode === "light" ? "Dark Mode" : "Light Mode"}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggleButton;
