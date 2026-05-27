'use client'
import React, { useLayoutEffect } from "react";
import { useThemeStore } from "@/store/theme-store";

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps) => {
  const theme = useThemeStore((s) => s.theme);
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return <>{children}</>;
};
export default ThemeProvider;
