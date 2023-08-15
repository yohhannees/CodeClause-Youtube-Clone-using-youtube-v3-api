import {
  BsSearch,
  BsCameraVideo,
  BsBell,
  BsMicFill,
  BsYoutube,
} from "react-icons/bs";
import Avatar from "react-avatar";
import ReactTooltip from "react-tooltip";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-b-2 fixed top-0 left-0 right-0 z-20 bg-white">
      {/* Hamburger menu */}
      <div className="flex cursor-pointer justify-between h-[1.2rem] w-[1.5rem] flex-col ml-2 group md:ml-7">
        <div className="border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500"></div>
        <div className="border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500"></div>
        <div className="border-r-1 h-[2px] bg-gray-700 group-hover:bg-gray-500"></div>
      </div>
      {/* Header / YouTube logo */}
      <div className="flex items-center justify-center relative ml-1 pt-1 hover:text-gray-800">
        <BsYoutube className="text-4xl text-red-600 pr-1" />
        <h2 className="text-2xl text-black-600 font-bold tracking-tighter">
          MeTube
        </h2>
        <span className="absolute -right-2 -top-0.5 pl-4 opacity-50 text-[15px]">
          IN
        </span>
      </div>
      {/* Query field */}
      <div className="flex items-center justify-center focus:outline-none focus:bg-gray-300">
        <div className="flex items-center justify-center bg-gray-200 rounded-lg mr-2 my-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 rounded-lg px-4 py-2 w-20 text-gray-800 md:w-[20em] focus:outline-none lg:w-[35em]"
          />
          <BsSearch className="mr-3" />
        </div>
        <BsMicFill className="text-2xl mr-3 hidden md:block" />
      </div>
      {/* Avatar */}
      <div className="flex items-center justify-between">
        <BsCameraVideo
          className="hidden md:block text-3xl mr-7"
          data-tip="Add a new Video"
        />
        <div className="relative mr-3 md:mr-7">
          <BsBell className="text-2xl md:text-3xl" data-tip="Notifications" />
          <span className="absolute -top-3 -right-1 w-4 h-4 text-center flex items-center justify-center rounded-full bg-red-600 p-3 text-[12px] text-white">
            2
          </span>
        </div>
        <div className="mr-5 md:mr-7" data-tip="Your account">
          <Avatar name="Sadeed" size={35} round={true} />
        </div>
      </div>
        
    </div>
  );
};

export default Header;
