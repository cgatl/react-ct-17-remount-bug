import React from "react";
import { test, expect } from "@playwright/experimental-ct-react17";
import App from "./App";

test.use({ viewport: { width: 500, height: 500 } });

test("passing test", async ({ mount }) => {
  const component = await mount(<App />);
  expect(true).toBe(true);
});

test("failing test - should work but can't remount", async ({ mount }) => {
  const component = await mount(<App />);
  await component.unmount();
  await mount(<App />);
  expect(true).toBe(true);
});
