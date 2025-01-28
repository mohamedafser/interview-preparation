import { Box, Typography } from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";

interface AppLogoPops {
  mblBoxStyle?: any;
}

function AppLogo(props: AppLogoPops) {
  const { mblBoxStyle = { xs: "none", md: "flex" } } = props;
  return (
    <Box sx={{ display: mblBoxStyle, alignItems: "center" }}>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
}

export default AppLogo;
