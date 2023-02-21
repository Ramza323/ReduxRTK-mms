import { styled } from "@mui/system";
import React from "react";

const FullWordStyled = styled("span")({
  background: "#1976D2",
  color: "white",
  position: "absolute",
  marginLeft: "10px",
  width: "-webkit-fill-available",
});

interface IFullWord {
  children: React.ReactNode;
}

const FullWord: React.FC<IFullWord> = ({ children }) => {
  return <FullWordStyled>{children}</FullWordStyled>;
};

export default FullWord;
