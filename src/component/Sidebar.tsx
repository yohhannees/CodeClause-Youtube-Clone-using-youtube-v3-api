import {
  BsHouse,
  BsCompass,
  BsController,
  BsFilm,
  BsClockHistory,
  BsCollectionPlay,
  BsHandThumbsUp,
  BsLightbulb,
  BsTrophy,
  BsGraphUp,
  BsMusicPlayer,
  BsGear,
} from "react-icons/bs";
const Sidebar = () => {
  const Items = [
    {
      name: "Home",
      icon: <BsHouse size={20} />,
    },
    {
      name: "Explore",
      icon: <BsCompass size={20} />,
    },
    {
      name: "Trending",
      icon: <BsGraphUp size={20} />,
    },

    {
      name: "Subscriptions",
      icon: <BsCollectionPlay size={20} />,
    },

    {
      name: "Gaming",
      icon: <BsController size={20} />,
    },
    {
      name: "Films",
      icon: <BsFilm size={20} />,
    },
    {
      name: "History",
      icon: <BsClockHistory size={20} />,
    },
    {
      name: "Likes",
      icon: <BsHandThumbsUp size={20} />,
    },
    {
      name: "Learning",
      icon: <BsLightbulb size={20} />,
    },
    {
      name: "Sports",
      icon: <BsTrophy size={20} />,
    },
    {
      name: "Music",
      icon: <BsMusicPlayer size={20} />,
    },
    {
      name: "Settings",
      icon: <BsGear size={20} />,
    },
  ];

  return (
    <div >
      <ul className="flex flex-col justify-between gap-6 fixed overflow-y-scroll h-[89%]">
        {Items.map((item, index) => (
          <li
            className="flex items-center text-center gap-2 transition-none p-2 cursor-pointer hover:text-gray-60 md:p-2"
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
