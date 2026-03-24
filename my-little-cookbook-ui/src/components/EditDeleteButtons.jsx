import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EditDeleteButtons() {

  return (
    <div className="flex">
      <Link to="/edit" className="text-primary dark:text-light">
        <FontAwesomeIcon icon={faPen} />
      </Link>

      <Link className="text-primary dark:text-light">
        <FontAwesomeIcon icon={faTrash} />
      </Link>
    </div>
  )
}
