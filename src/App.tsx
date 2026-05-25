import Counter from "@/components/counter.tsx"
import Navbar from "@/components/Navbar.tsx"
import Product from "@/components/shoppingCart/Product.tsx"
import Theme from "@/components/theme"
import Todo from "@/components/Todo.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { useThemeStore } from "@/store/theme-store.ts"

export function App() {
  const themeStore = useThemeStore()

  return (
    <Theme>
      <Navbar />
      <main className="flex min-h-svh flex-col justify-center gap-10 px-4 pt-22 pb-4 lg:px-20">
        <section className="flex flex-col items-center gap-2">
          <h2 className="text-3xl">Task - 1</h2>
          <Button className="hidden md:block" onClick={themeStore.toggleTheme}>
            Toggle to {themeStore.theme == "light" ? "dark" : "light"}
          </Button>
        </section>
        <Separator />

        <section className="flex flex-col items-center gap-2">
          <h2 className="text-3xl">Task - 2</h2>
          <Counter />
        </section>
        <Separator />
        <section className="flex flex-col items-center gap-2">
          <h2 className="text-3xl">Task - 3</h2>
          <Todo />
        </section>
        <Separator />
        <section className="flex flex-col items-center gap-2">
          <h2 className="text-3xl">Task - 3</h2>

          <Product />
        </section>
      </main>
    </Theme>
  )
}

export default App
