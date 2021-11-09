import React from "react";
import {Button} from "./Button";
import { Meta } from "@storybook/react/types-6-0";

export const Primary =  () => (
  <div>
    <Button label={"hello there"}/>
  </div>
);

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;