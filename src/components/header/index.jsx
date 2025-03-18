import Image from "next/image";
import Logo from "../../assets/logo.png";
import Navlink from "../navlink";

function Header() {
  return (
    <header className="bg-[#232536] py-4">
      <div className="container max-w-8xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div>
          <Navlink href="/">
            <Image src={Logo} alt="logo" width={150} height={50} />
          </Navlink>
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/blog">Blog</Navlink></li>
            <li><Navlink href="/about">About Us</Navlink></li>
            <li><Navlink href="/register">Register</Navlink></li>
          </ul>

          {/* Login Button */}
          <Navlink href="/login">
            <button className="bg-white text-black px-6 py-2 ml-8 rounded-md hover:bg-gray-200 transition">
              Login
            </button>
          </Navlink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
