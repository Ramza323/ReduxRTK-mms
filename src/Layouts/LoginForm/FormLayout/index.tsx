import React from "react";

interface IFormLayout {
  children: React.ReactNode;
}

const FormLayout: React.FC<IFormLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default FormLayout;
