import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Avatar,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
// import { toggleTheme } from "../redux/theme/themeSlice";
// import { Button } from "flowbite-react";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const { CurrentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Dynamically set body padding to prevent content being behind header
  useEffect(() => {
    const setBodyPadding = () => {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      document.body.style.paddingTop = `${headerHeight}px`;
    };

    setBodyPadding();
    window.addEventListener("resize", setBodyPadding);
    return () => window.removeEventListener("resize", setBodyPadding);
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header
      style={{ backgroundClip: "padding-box" }} // prevent shadow showing outside
      ref={headerRef}
      className=" w-full fixed top-0 left-0 z-50 bg-white dark:bg-primary text-black dark:text-white  
 px-4 mb-20 py-2 flex flex-col"
    >
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-400"></span>

      <div className="flex items-center justify-between w-full">
        {/* <div className="flex items-center gap-1">
          
          <Link to="/">
            <span className="px-2 py-1 bg-yellow-400 text-black rounded font-bold text-lg shadow">
              MHD's
            </span>
          </Link>
          <span className="font-bold text-xl  mr-2"> Blog</span>
        </div> */}
        <div className="flex items-center gap-2 mr-8">
          <Link to="/">
            <img src={logo} alt="MHD's Logo" className="w-20 h-15 " />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="px-3 py-2 rounded-lg bg-yellow-400 text-black dark:bg-yellow-400 dark:text-black shadow font-semibold transition-colors"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="2" fill="#18181b" />
              <rect x="4" y="15" width="16" height="2" fill="#18181b" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-4 items-center w-full justify-between">
          <nav className="flex gap-2 items-center">
            <Link
              to="/"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/about"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/projects"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/contact"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              contact
            </Link>
          </nav>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors"
            >
              Search
            </button>
          </form>
          <div className="flex gap-2 md:order-2">
            <button
              className="px-3 py-2 rounded-lg bg-yellow-400 text-black dark:bg-yellow-400 dark:text-black shadow font-semibold transition-colors mt-2"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          {CurrentUser ? (
            <div className="flex items-center gap-2">
              <img
                src={CurrentUser.ProfilePicture}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-yellow-400"
              />
              <span className="font-medium">@{CurrentUser.username}</span>
              <Link
                to="/dashboard?tab=profile"
                className="relative inline-flex items-center justify-center p-0.5  me-2 
             overflow-hidden text-sm font-medium rounded-lg 
             bg-gradient-to-r from-red-500 to-yellow-400 
             group shadow transition-all duration-300 ease-in-out 
             hover:brightness-90"
              >
                <span className="relative px-5 py-2.5">Dashboard</span>
              </Link>

              <button
                onClick={handleSignout}
                class="relative inline-flex items-center justify-center p-0.5  me-2 
    overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-red-500 to-yellow-400 group-hover:from-red-500 group-hover:to-yellow-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
    focus:ring-red-200 dark:focus:ring-red-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 
      bg-white dark:bg-gray-900 rounded-md 
      group-hover:bg-transparent group-hover:dark:bg-transparent"
                >
                  Sign Out
                </span>
              </button>
            </div>
          ) : (
            <Link to="/sign-in">
              <button class="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-red-500 to-yellow-400 group-hover:from-red-500 group-hover:to-yellow-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Sign in
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-2 animate-fade-in">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 mb-2"
          >
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors"
            >
              Search
            </button>
          </form>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/about"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/projects"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                path === "/contact"
                  ? " text-accent  dark:text-accent border-b-2 border-accent"
                  : " dark:hover:text-accent"
              }`}
            >
              contact
            </Link>
            <Link
              to="/dashboard?tab=profile"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 
             overflow-hidden text-sm font-medium rounded-lg 
             bg-gradient-to-r from-red-500 to-yellow-400 
             group shadow transition-all duration-300 ease-in-out 
             hover:brightness-90"
            >
              <span className="relative px-5 py-2.5">Dashboard</span>
            </Link>
          </nav>
          <button onClick={() => dispatch(toggleTheme())}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          {CurrentUser ? (
            <div className="flex items-center gap-2 mt-2">
              <img
                src={CurrentUser.ProfilePicture}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-yellow-400"
              />
              <span className="font-medium">@{CurrentUser.username}</span>
              <button
                onClick={handleSignout}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
    bg-gradient-to-r from-red-500 to-yellow-400 group-hover:from-red-500 group-hover:to-yellow-400 hover:text-white  dark:text-white focus:ring-4 focus:outline-none 
    focus:ring-red-200 dark:focus:ring-red-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Sign Out
                </span>
              </button>
            </div>
          ) : (
            <Link to="/sign-in">
              <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold shadow hover:bg-yellow-300 transition-colors mt-2">
                Sign In
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
