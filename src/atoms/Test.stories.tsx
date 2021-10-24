import React from "react";
import { Test } from "./Test";

import { Meta } from "@storybook/react/types-6-0";

// Primary will be the name for the first story
export const Primary: React.FC<{}> = () => (
  <div>
    <Test title="My Title"/>
  </div>
);

// Secondary will be the name for the second story
export const Secondary: React.FC<{}> = () => (
    <Test title="My Title 2"/>
);

export default {
  title: "Test", // Title of you main menu entry for this group of stories
  component: Test, // This is the component documented by this Storybook page
} as Meta;