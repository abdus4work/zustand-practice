import ThemeButton from "@/components/navbar/theme-button";
import LinkItem from "@/components/navbar/link-item";
import MobileMenu from "@/components/navbar/mobile-menu";
import { NAV_ITEM } from "@/components/navbar/nav-item";



const Navbar = () => {
  return (
    <nav className="dark:text-black fixed z-50 bg-white/40 backdrop-blur-2xl top-0 flex h-20 w-full items-center justify-between border px-4 text-2xl shadow-md  lg:px-20">
      <h1 className='relative text-3xl font-bold after:absolute after:bottom-2 after:inline-block after:h-3 after:w-3 after:rounded-full after:bg-emerald-400 after:content-[""] '>
        Zustand<span className="text-amber-300">Demo</span>
      </h1>
      <ul className="hidden gap-4 md:flex">
        {NAV_ITEM.map((item) => (
          <LinkItem key={item.title} href={item.link} title={item.title} />
        ))}
      </ul>
      <MobileMenu/>
      <div className="flex items-center gap-5 hidden md:flex">
        <ThemeButton />
      </div>
    </nav>
  );
};
export default Navbar;
