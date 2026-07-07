const Navbar = ({ coin }) => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="navbar p-0">

        <div className="navbar-start">
                   <img  src="../../public/assets/logo.png" alt="cheap-2--v1"/>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-10 text-gray-500 text-xl font-medium">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">Fixture</li>
            <li className="cursor-pointer hover:text-black">Teams</li>
            <li className="cursor-pointer hover:text-black">Schedules</li>
          </ul>
        </div>

        <div className="navbar-end gap-3">

          <button className="btn bg-white border border-gray-300 rounded-xl shadow-none hover:bg-white">
            <span className="font-bold">{coin}</span>
            <span>Coin</span>
           <img width="20" height="20" src="https://img.icons8.com/color/48/cheap-2--v1.png" alt="cheap-2--v1"/>
          </button>

          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-white rounded-box w-52 mt-3 shadow"
            >
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;