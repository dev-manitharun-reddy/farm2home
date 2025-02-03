import { OUTLET_NAME } from "../../constants";

const Header = () => {
  const HandleMenuToggle = () => {
    let collapse = document.querySelector("#navbar-collapse");
    if (!collapse) return;
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };
  return (
    <>
      <nav className="bg-white1 py-2 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-white">
              {OUTLET_NAME}
            </a>
            <button
              //   className="border border-solid border-gray-600 px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"
              className="border-4 border-solid border-gray-900 px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
              onClick={() => {
                HandleMenuToggle();
              }}
            >
              {/* svg /menu.svg */}
              <img src="/menu.png" />
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            {/* <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </a> */}
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#"
              onClick={() => {
                HandleMenuToggle();
              }}
              className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-black rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
