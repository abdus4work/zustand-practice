import Todo from "@/components/Todo.tsx"
import { Button } from "@/components/ui/button.tsx"
import Theme from "@/components/ui/theme.tsx"
import { useThemeStore } from "@/store/theme-store.ts"

export function App() {
  const themeStore = useThemeStore()

  return (
    <Theme>
      <div className="flex min-h-svh justify-center p-6">
        <Button
          onClick={themeStore.toggleTheme}
          className="absolute top-0 right-0"
        >
          Toggle to {themeStore.theme == "light" ? "dark" : "light"}
        </Button>
        {/* <Counter /> */}
        <Todo />
      </div>
    </Theme>
  )
}

export default App
