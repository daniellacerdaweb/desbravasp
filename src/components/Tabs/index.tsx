"use client";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
export const Tabs = () => {
  const [current, setCurrent] = useState(0);
  var regioes = [
    "Todas",
    "Zona Norte",
    "Zona Leste",
    "Zona Oeste",
    "Zona Oeste",
    "Centro",
    "ABC",
  ];

  const classItem =
    "cursor-pointer text-xl inline-block p-4 text-gray-900 shadow-inner bg-gray-200  min-w-40  rounded-lg    active dark:text-blue-500 dark:border-blue-500";
  const classItem2 =
    "cursor-pointer  text-xl inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 min-w-40 hover:border-gray-300 dark:hover:text-gray-300";
  return (
    <div className=" overflow-y-hidden overflow-x-auto md:h-auto text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
      <ul className="flex md:flex-wrap -mb-px  items-center">
        {regioes.map((item, index) => {
          return (
            <li
              className="me-2 whitespace-nowrap	 md:whitespace-normal  "
              key={index}
            >
              <a
                onClick={() => setCurrent(index)}
                className={current === index ? classItem : classItem2}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
