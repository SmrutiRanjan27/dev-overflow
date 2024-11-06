"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <div>
      <NextThemeProvider {...props}>{children}</NextThemeProvider>
    </div>
  );
};

export default ThemeProvider;
