import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center font-primary text-gray-700 dark:text-gray-200 pb-6">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1 dark:text-"
        aria-hidden="true"
      />
      by PW
      <a href="mailto:pingwang@715@gmail.com" className="px-4 hover:text-red-900 hover:underline dark:hover:text-light hover:underline:text-light">
        Contact me
      </a>
    </footer>

  );
}
