"use client"
import { useThemeStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";

const ThemeButton = () => {
  const themeStore = useThemeStore();
  return (
    <Button className="hidden md:block" onClick={themeStore.toggleTheme}>
      Toggle to {themeStore.theme == "light" ? "dark" : "light"}
    </Button>
  );
};
export default ThemeButton;
