import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "/space-logo.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <div className="relative flex items-center justify-between md:h-24 p-6 md:py-6 md:px-10 lg:px-14 lg:mt-8 z-[999]">
      <Link to="/" className="w-10 h-10 overflow-hidden">
        <img src={Logo} alt="Logo" className="object-contain" />
      </Link>

      <div className="w-full z-[999]">
        <hr className="border-dark-gray lg:flex justify-start lg:w-72 xl:w-[440px] hidden ml-16 z-[999]" />
      </div>

      <div className="md:hidden" onClick={handleShowMenu}>
        <HiMenu className="w-8 h-8 text-lilac" />
      </div>

      <div
        onClick={handleShowMenu}
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute left-0 top-0 w-screen h-screen bg-transparent md:hidden`}
      ></div>

      <div
        className={`${
          showMenu ? "flex md:block" : "hidden md:block"
        } absolute top-0 right-0 pt-6 pl-8 md:p-0 flex flex-col w-[70%] md:w-[60%] h-screen md:h-24 bg-white/5 md:bg-white/10 backdrop-blur-md`}
      >
        <HiX
          className="w-8 h-8 text-lilac md:hidden self-end mr-6"
          onClick={handleShowMenu}
        />

        <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-10 lg:gap-12 xl:gap-16 pt-16 md:p-0 md:w-full md:h-full font-barlow-condensed font-normal text-start text-base md:text-sm xl:text-base text-white uppercase tracking-widest">
          <li className="md:h-24 md:flex md:items-center">
            <NavLink to="/" className="lg:flex" onClick={() => {setShowMenu(false)}}>
              <span className="md:hidden lg:flex font-bold pr-4">00</span>Home
            </NavLink>
          </li>
          <li className="md:h-24 md:flex md:items-center">
            <NavLink to="destination" className="lg:flex" onClick={() => {setShowMenu(false)}}>
              <span className="md:hidden lg:flex font-bold pr-4">01</span>
              Destination
            </NavLink>
          </li>
          <li className="md:h-24 md:flex md:items-center">
            <NavLink to="crew" className="lg:flex" onClick={() => {setShowMenu(false)}}>
              <span className="md:hidden lg:flex font-bold pr-4">02</span>Crew
            </NavLink>
          </li>
          <li className="md:h-24 md:flex md:items-center">
            <NavLink to="technology" className="lg:flex" onClick={() => {setShowMenu(false)}}>
              <span className="md:hidden lg:flex font-bold pr-4">03</span>
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
