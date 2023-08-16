import { Items } from "../data/item";
interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC= ({  }) => {
  return (
    <div
      
    >
      <ul className="flex flex-col justify-between gap-10 fixed overflow-y-scroll h-[95%]">
        {Items &&
          Items.map((item, index) => {
            return (
              <li
                className="flex items-center text-center gap-4 transition-none p-3 cursor-pointer hover:text-gray-600 md:p-2"
                key={index}
              >
                {item.icon}{" "}
                <span className="font-semibold pr-4 hidden lg:block">
                  {item.name}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
