
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
       icon: <BsHouse size={25} />,
     },
     {
       name: "Explore",
       icon: <BsCompass size={25} />,
     },
     {
       name: "Trending",
       icon: <BsGraphUp size={25} />,
     },
     {
       name: "Subscriptions",
       icon: <BsCollectionPlay size={25} />,
     },
     {
       name: "Gaming",
       icon: <BsController size={25} />,
     },
     {
       name: "Films",
       icon: <BsFilm size={25} />,
     },
     {
       name: "History",
       icon: <BsClockHistory size={25} />,
     },
     {
       name: "Likes",
       icon: <BsHandThumbsUp size={25} />,
     },
     {
       name: "Learning",
       icon: <BsLightbulb size={25} />,
     },
     {
       name: "Sports",
       icon: <BsTrophy size={25} />,
     },
     {
       name: "Music",
       icon: <BsMusicPlayer size={25} />,
     },
     {
       name: "Settings",
       icon: <BsGear size={25} />,
     },
   ];

   return (
     <div>
       <ul className="flex flex-col justify-between gap-10 fixed overflow-y-scroll h-[95%]">
         {Items.map((item, index) => (
           <li
             className="flex items-center text-center gap-4 transition-none p-3 cursor-pointer hover:text-gray-60 md:p-2"
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



