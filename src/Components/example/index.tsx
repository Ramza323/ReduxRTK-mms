import React from "react";

interface ExampleInterface {
  exampleProp: string;
}

const Example: React.FC<ExampleInterface> = ({ exampleProp }) => {
  return <div>Texto del prop {exampleProp}</div>;
};

export default Example;
