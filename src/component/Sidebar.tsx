import React from "react";

const Sidebar = () => {
  const Items = [
    {
      name: "Home",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      ),
    },
    {
      name: "Explore",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 18l-6-6 6-6"
          ></path>
        </svg>
      ),
    },
    {
      name: "Trending",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          ></path>
        </svg>
      ),
    },
    {
      name: "Subscriptions",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22 12h-4l-3 9L9 3l-3 9H2"
          ></path>
        </svg>
      ),
    },
    {
      name: "Gaming",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      name: "Films",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20h4M20 6H4v12a2 2 0 002 2h12a2 2 0 002-2V6z"
          ></path>
        </svg>
      ),
    },
    {
      name: "History",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 15V9l5 5-5 5"
          ></path>
        </svg>
      ),
    },
    {
      name: "Likes",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 21v-2a4 4 0 014-4h0a4 4 0 004-4h2M6 21v-2a4 4 0 118-3.73"
          ></path>
        </svg>
      ),
    },
    {
      name: "Learning",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20h9"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20H9a2 2 0 01-2-2v-5a7 7 0 017-7h0a7 7 0 017 7v5a2 2 0 01-2 2h-3"
          ></path>
        </svg>
      ),
    },
    {
      name: "Sports",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 18a5 5 0 00-5 5h5v-5zM19 18a5 5 0 01-5 5h5v-5z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 13.09v.01M22 13.09v.01M4.59 3.59l.42.41M19.58 18.58l.42.41M18.36 4.63l.42.42M5.37 19.62l.42.42"
          ></path>
        </svg>
      ),
    },
    {
      name: "Music",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 18V5l12-2v13"
          ></path>
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg
          className="text-gray-500 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div>
      <ul className="flex flex-col justify-between gap-10 fixed overflow-y-scroll h-[95%]">
        {Items.map((item, index) => (
          <li
            className="flex items-center text-center gap-4 transition-none p-3 cursor-pointer hover:text-gray-600 md:p-2"
            key={index}
          >
            {item.icon}{" "}
            <span className="font-semibold pr-4 hidden lg:block">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
