import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

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

  const navLinkClass = "text-center text-lg ont-primary py-2 font-semibold text-primary dark:text-light hover:text-dark dark:hover:text-lighter";

  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-gray-50 dark:bg-darkbg">
      <div className="flex items-center, justify-between mx-auto max-w-[1152px] px-6 py-6">
        <a href="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faUtensils} className="h-9 w-9 mx-1" />
          <span className="font-bold">My Little Cookbook</span>
        </a>
        <nav className="flex items-center py-2 z-10">
          <button className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"  aria-label="Toggle theme" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 text-primary dark:text-light"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className={navLinkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={navLinkClass}>
                About
              </a>
            </li>
            <li>
              <a href="/login" className={navLinkClass}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
