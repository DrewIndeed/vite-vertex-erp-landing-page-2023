import { rootStore } from "@store/index";
import Icons from "../Hero/icons";

const Navbar = () => {
  const toggleStarted = rootStore(({ toggleStarted }) => toggleStarted);
  return (
    <nav
      className="fixed z-[99] filter top-0 left-0 right-0 py-4 md:py-5 
      px-10 max-w-[110rem] flex items-center justify-between 
    bg-white text-[#020303] dark:bg-[#02030330] dark:text-white rounded-md 
      bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
    >
      <a
        className="cursor-pointer font-bold text-xl md:text-3xl font-mono"
        href=""
      >
        VertexERP
      </a>
      <a
        className="get-started-btn with-base-gradient text-xs py-2 px-3 md:text-sm md:py-3 md:px-4"
        href=""
        onClick={(e) => {
          e.preventDefault();
          toggleStarted();
        }}
      >
        Get started
        <Icons.GetStartedChevronRight />
      </a>
    </nav>
  );
};

export default Navbar;
