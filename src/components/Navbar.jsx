const Navbar = ({ coin }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="navbar p-0">

        {/* Logo */}
        <div className="navbar-start">
          <img src="/assets/logo.png" alt="Logo" className="w-16 md:w-auto" />
        </div>

        {/* Right Side */}
        <div className="navbar-end flex-1 justify-end gap-6">

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-500 text-lg font-medium">
            <li className="cursor-pointer hover:text-black duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-black duration-300">
              Fixture
            </li>
            <li className="cursor-pointer hover:text-black duration-300">
              Teams
            </li>
            <li className="cursor-pointer hover:text-black duration-300">
              Schedules
            </li>
          </ul>

          {/* Coin Button */}
          <button className="btn bg-white border border-gray-300 rounded-xl shadow-none hover:bg-white">
            <span className="font-bold">{coin}</span>
            <span>Coin</span>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/cheap-2--v1.png"
              alt="coin"
            />
          </button>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-2xl">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[100] mt-3 w-52 rounded-box bg-white shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;