import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center font-primary text-gray-700 pb-6">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1"
        aria-hidden="true"
      />
      by PW
      <a href="mailto:pingwang@715@gmail.com" className="px-4 hover:text-red-900 hover:underline">
        Contact me
      </a>
    </footer>

  );
}
