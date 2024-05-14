import Logo from "../assets/icons/logo.svg?react";
import Cart from "../assets/icons/cart.svg?react";

const Header = ({ cartMealsSize }) => {
  return (
      <header>
        <nav className="py-4">
          <ul className="grid place-items-center grid-flow-col text-indigo-950 text-base font-normal font-inter leading-tight">
            <li>
              <a href="/">
                <Logo />
              </a>
            </li>
            <div className="grid grid-flow-col gap-4">
              <li className="hover:text-teal-400">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-teal-400">
                <a href="#menu">Menu</a>
              </li>
              <li className="hover:text-teal-400">
                <a href="#company">Company</a>
              </li>
              <li className="hover:text-teal-400">
                <a href="#login">Login</a>
              </li>
            </div>
            <li className="size-14 grid place-items-center bg-[#35B8BE] relative">
              <Cart />
              <div className="absolute size-6 rounded-full bg-white shadow-md flex items-center justify-center -top-2 -right-2">
              <span className="text-[#35B8BE] font-sans text-xs font-normal leading-4">
                {cartMealsSize}
              </span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
