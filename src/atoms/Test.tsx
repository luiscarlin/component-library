import React from "react";

interface TestProps {
  title: string;
}

export const Test = ({title}: TestProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>jmarceli-react-ts-library</div>
      <div>sample component</div>
    </div>
  );
};
