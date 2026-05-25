import { Button } from "@/components/ui/button.tsx"
import { useThemeStore } from "@/store/theme-store.ts"

const NAV_ITEM = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Task",
    link: "/task",
  },
]

const Navbar = () => {
  const themeStore = useThemeStore()

  return (
    <nav className="dark:text-black fixed z-50 bg-white/40 backdrop-blur-2xl top-0 flex h-20 w-full items-center justify-between border px-4 text-2xl shadow-md  lg:px-20">
      <h1 className='relative text-3xl font-bold after:absolute after:bottom-2 after:inline-block after:h-3 after:w-3 after:rounded-full after:bg-emerald-400 after:content-[""] '>
        Zustand<span className='text-amber-300'>Demo</span>
      </h1>
      <ul className="hidden gap-4 md:flex">
        {NAV_ITEM.map((item) => (
          <li
            key={item.title}
            className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-emerald-300"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        <Button className="hidden md:block" onClick={themeStore.toggleTheme}>
          Toggle to {themeStore.theme == "light" ? "dark" : "light"}
        </Button>
      </div>
    </nav>
  )
}
export default Navbar
