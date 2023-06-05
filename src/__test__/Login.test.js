import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "@mui/icons-material";

test("renders two input fields", () => {
  render(<Login />);
  const input1 = screen.getByLabelText("input 1:");
  const input2 = screen.getByLabelText("input 2:");

  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});

test("inputs accept and update values", () => {
  render(<Login />);
  const input1 = screen.getByLabelText("input 1:");
  const input2 = screen.getByLabelText("input 2:");

  fireEvent.change(input1, { target: { value: "Test value 1" } });
  fireEvent.change(input2, { target: { value: "Test value 2" } });

  expect(input1.value).toBe("Test value 1");
  expect(input2.value).toBe("Test value 2");
});
