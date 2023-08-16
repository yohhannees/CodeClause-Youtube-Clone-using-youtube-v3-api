import React, { Component } from "react";
import { Genres } from "../data/Genres";
class Navbar extends Component {
  render() {
    return (
      <div className="flex overflow-x-scroll items-center gap-6 scrollbar-hide w-screen border-b-2 mb-2 pb-4">
        {Genres &&
          Genres.map((item, index) => {
            return (
              <button
                key={index}
                className="border-[#0000001a] border-2 rounded-[16px] bg-[#0000000d] pl-2 pr-2 pt-1 pb-1 cursor-pointer last:mr-24 hover:bg-gray-200 active:bg-gray-900 active:text-white"
              >
                {item}
              </button>
            );
          })}
      </div>
    );
  }
}

export default Navbar;
