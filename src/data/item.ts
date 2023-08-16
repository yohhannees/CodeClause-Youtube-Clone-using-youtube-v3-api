import React, { ReactNode } from 'react';
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
} from 'react-icons/bs';

interface Item {
  name: string;
  icon: ReactNode;
  size?: number; // Add the size prop here
}

export const Items: Item[] = [
  {
    name: 'Home',
    icon: <BsHouse size={25} />, // Now you can pass the size prop
  },
  // Rest of the items...
];