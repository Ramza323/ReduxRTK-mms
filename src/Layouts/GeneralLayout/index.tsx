import React from "react";
import Grid from "@mui/material/Grid";

interface IGeneralLayout {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<IGeneralLayout> = ({ children }) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {children}
    </Grid>
  );
};

export default GeneralLayout;
