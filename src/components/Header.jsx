import Logo from "../assets/icons/logo.svg?react"
import Cart from "../assets/icons/cart.svg?react"

const Header = () => {
    return (
        <header className="flex h-24 w-full items-center justify-around">
            <div className="w-6/10 h-12 ml-10">
                <Logo/>
            </div>
            <nav className="w-3/10 items-center">
                <ul className="flex justify-center gap-10 text-indigo-950 text-base font-normal font-inter leading-tight">
                    <li className="hover:text-teal-400 block w-20">
                        <a className="">Home</a>
                    </li>
                    <li className="hover:text-teal-400 block w-20">
                        <a>Menu</a>
                    </li>
                    <li className="hover:text-teal-400 block w-20">
                        <a>Company</a>
                    </li>
                    <li className="hover:text-teal-400 block w-20">
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
            <div className="w-1/10">
                <div className="size-14 flex items-center justify-center bg-[#35B8BE] relative">
                    <Cart/>
                    <div
                        className="absolute size-6 rounded-full bg-white shadow-md flex items-center justify-center -top-2 -right-2">
                        <div className="text-[#35B8BE] text-center font-sans text-xs font-normal leading-4">0</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header