import { Box, Grid, Paper } from "@mui/material";
import React from "react";

interface ILoginFormLayout {
  children?: React.ReactNode;
}

const LoginFormLayout: React.FC<ILoginFormLayout> = ({ children }) => {
  return (
    <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "block",
          marginTop: "0px",
          marginLeft: "118px",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default LoginFormLayout;
