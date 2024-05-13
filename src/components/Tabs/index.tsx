"use client";

import { useState } from "react";
import { isMobile } from "react-device-detect";

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
    "cursor-pointer text-xl inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const classItem2 =
    "cursor-pointer text-xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  // inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500
  return (
    <div className="  text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px justify-between">
        {regioes.map((item, index) => {
          return (
            <li className="me-2" key={index}>
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
