import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVideo,
  faBell,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="flex items-center">
          <a href="/" className="mr-6">
            {/* Insert YouTube logo image */}
          </a>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-2 pl-8 w-64 focus:outline-none"
              placeholder="Search"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faVideo} className="text-red-600" />
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faUserCircle} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
