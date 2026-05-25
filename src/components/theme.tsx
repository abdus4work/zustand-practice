import { useThemeStore } from "@/store/theme-store.ts"
import { useLayoutEffect } from "react"

type ThemeProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => {
  const theme = useThemeStore((s) => s.theme)
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
  }, [theme])
  return <>{children}</>
}
export default Theme
