import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const navLinkClass = "text-center text-lg font-semibold text-primary font-primary py-2";

  return (
    <header className="border-b border-gray-300 sticky top-0 z-20 bg-gray-50">
      <div className="flex items-center, justify-between mx-auto max-w-[1152px] px-6 py-6">
        <a href="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faUtensils} className="h-9 w-9 mx-1" />
          <span className="font-bold">My Little Cookbook</span>
        </a>
        <nav className="flex items-center py-2 z-10">
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
