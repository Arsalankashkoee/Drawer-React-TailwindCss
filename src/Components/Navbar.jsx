import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <header className="bg-gray-300 sticky top-0 h-14 flex items-center">
      <div className="container flex items-center justify-between">
        <nav className="">
          <ul className="hidden md:flex md:items-center gap-7 lg:gap-11 transition-all ease-in duration-500">
            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 hover:text-cyan-500 transition-all ease-in-out duration-300"
              >
                Home
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 hover:text-cyan-500 transition-all ease-in-out duration-300"
              >
                Docs
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 hover:text-cyan-500 transition-all ease-in-out duration-300"
              >
                About Us
              </a>
            </li>

            <li className="">
              <a
                href="/"
                className="text-lg text-slate-700 hover:text-cyan-500 transition-all ease-in-out duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* hamburger-menu */}
          <div className="block md:hidden">
            <Drawer />
          </div>
        </nav>

        {/* logo */}
        <div className="">
          <span className="text-lg md:text-2xl font-bold text-cyan-500 cursor-pointer">
            Tailwind.
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
