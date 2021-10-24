import React from "react";
import { render, screen } from "@testing-library/react";

import {Test} from "./Test";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<Test title="hello"/>);
    expect(screen.getByText("sample component")).toBeDefined();
  });
});