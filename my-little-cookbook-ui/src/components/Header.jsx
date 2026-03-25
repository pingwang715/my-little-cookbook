import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const navLinkClass = "text-center text-lg font-primary py-2 font-semibold text-primary dark:text-light hover:text-dark dark:hover:text-lighter";

  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-gray-50 dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-6">
        <Link href="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faUtensils} className="h-9 w-9 mx-1" />
          <span className="font-bold">My Little Cookbook</span>
        </Link>
        <nav className="flex items-center py-2 z-10">
          <button className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"  aria-label="Toggle theme" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 text-primary dark:text-light"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/home" className={({isActive}) => isActive ? `underline ${navLinkClass}` : navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? `underline ${navLinkClass}` : navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/like" className={({isActive}) => isActive ? `underline ${navLinkClass}` : navLinkClass}>
                Like
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" className={({isActive}) => isActive ? `underline ${navLinkClass}` : navLinkClass}>
                Add
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
