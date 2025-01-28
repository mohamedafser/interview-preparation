// theme.ts
import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      "50": "hsl(210, 100%, 96%)",
      "100": "hsl(210, 100%, 90%)",
      "200": "hsl(210, 100%, 80%)",
      "300": "hsl(210, 100%, 70%)",
      "400": "hsl(210, 100%, 60%)",
      "500": "hsl(210, 100%, 45%)",
      "600": "hsl(210, 100%, 42%)",
      "700": "hsl(210, 100%, 38%)",
      "800": "hsl(210, 100%, 30%)",
      "900": "hsl(210, 100%, 23%)",
      main: "hsl(210, 100%, 60%)",
      light: "hsl(210, 100%, 70%)",
      dark: "hsl(210, 100%, 38%)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      "50": "hsl(215, 15%, 97%)",
      "100": "hsl(215, 15%, 92%)",
      "200": "hsl(215, 15%, 89%)",
      "300": "hsl(215, 15%, 82%)",
      "400": "hsl(215, 15%, 75%)",
      "500": "hsl(215, 15%, 65%)",
      "600": "hsl(215, 15%, 50%)",
      "700": "hsl(215, 15%, 40%)",
      "800": "hsl(215, 15%, 22%)",
      "900": "hsl(215, 15%, 12%)",
      main: "hsl(210, 14%, 13%)",
      contrastText: "hsl(210, 14%, 22%)",
      light: "hsl(210, 14%, 30.400000000000002%)",
      dark: "hsl(210, 14%, 9.1%)",
    },
    divider: "hsla(210, 14%, 28%, 0.3)",
    primaryDark: {
      "50": "hsl(210, 14%, 92%)",
      "100": "hsl(210, 14%, 87%)",
      "200": "hsl(210, 14%, 72%)",
      "300": "hsl(210, 14%, 56%)",
      "400": "hsl(210, 14%, 36%)",
      "500": "hsl(210, 14%, 28%)",
      "600": "hsl(210, 14%, 22%)",
      "700": "hsl(210, 14%, 13%)",
      "800": "hsl(210, 14%, 9%)",
      "900": "hsl(210, 14%, 7%)",
      main: "hsl(210, 14%, 56%)",
    },
    background: {
      default: "hsl(210, 14%, 7%)",
      paper: "hsla(210, 14%, 9%, 0.8)",
    },
    common: {
      black: "hsl(200, 10%, 4%)",
      white: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "hsl(215, 15%, 75%)",
      tertiary: "hsl(215, 15%, 65%)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    grey: {
      "50": "hsl(215, 15%, 97%)",
      "100": "hsl(215, 15%, 92%)",
      "200": "hsl(215, 15%, 89%)",
      "300": "hsl(215, 15%, 82%)",
      "400": "hsl(215, 15%, 75%)",
      "500": "hsl(215, 15%, 65%)",
      "600": "hsl(215, 15%, 50%)",
      "700": "hsl(215, 15%, 40%)",
      "800": "hsl(215, 15%, 22%)",
      "900": "hsl(215, 15%, 12%)",
      main: "hsl(215, 15%, 40%)",
      contrastText: "hsl(215, 15%, 50%)",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    error: {
      "50": "hsl(355, 98%, 97%)",
      "100": "hsl(355, 98%, 93%)",
      "200": "hsl(355, 98%, 87%)",
      "300": "hsl(355, 98%, 80%)",
      "400": "hsl(355, 98%, 74%)",
      "500": "hsl(355, 98%, 66%)",
      "600": "hsl(355, 98%, 46%)",
      "700": "hsl(355, 98%, 39%)",
      "800": "hsl(355, 98%, 29%)",
      "900": "hsl(355, 98%, 17%)",
      main: "hsl(355, 98%, 66%)",
      light: "hsl(355, 98%, 80%)",
      dark: "hsl(355, 98%, 39%)",
      contrastText: "#fff",
    },
    success: {
      "50": "hsl(144, 72%, 95%)",
      "100": "hsl(144, 72%, 87%)",
      "200": "hsl(144, 72%, 77%)",
      "300": "hsl(144, 72%, 66%)",
      "400": "hsl(144, 72%, 56%)",
      "500": "hsl(144, 72%, 46%)",
      "600": "hsl(144, 72%, 41%)",
      "700": "hsl(144, 72%, 37%)",
      "800": "hsl(144, 72%, 32%)",
      "900": "hsl(144, 72%, 21%)",
      main: "hsl(144, 72%, 41%)",
      light: "hsl(144, 72%, 66%)",
      dark: "hsl(144, 72%, 37%)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    warning: {
      "50": "hsl(48, 100%, 96%)",
      "100": "hsl(48, 100%, 88%)",
      "200": "hsl(48, 100%, 82%)",
      "300": "hsl(48, 100%, 64%)",
      "400": "hsl(48, 100%, 48%)",
      "500": "hsl(48, 100%, 44%)",
      "600": "hsl(40, 100%, 40%)",
      "700": "hsl(36, 100%, 34%)",
      "800": "hsl(36, 100%, 27%)",
      "900": "hsl(36, 100%, 18%)",
      main: "hsl(48, 100%, 44%)",
      light: "hsl(48, 100%, 64%)",
      dark: "hsl(36, 100%, 34%)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    gradients: {
      radioSubtle:
        "radial-gradient(100% 100% at 100% 100%, transparent 0, hsla(210, 100%, 23%, 0.3) 300%)",
      linearSubtle:
        "linear-gradient(0deg, hsla(210, 100%, 23%, 0.1), hsla(210, 14%, 7%, 0.5))",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  },
});
