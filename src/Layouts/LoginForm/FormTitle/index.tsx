import { styled } from "@mui/system";
import React from "react";

const Test = styled("h1")({
  color: "#1976D2",
  fontSize: "58px",
});

interface IFormTitle {
  children: React.ReactNode;
}

const FormTitle: React.FC<IFormTitle> = ({ children }) => {
  return <Test>{children}</Test>;
};

export default FormTitle;
