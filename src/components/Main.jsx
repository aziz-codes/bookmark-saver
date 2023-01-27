import React, { useState } from "react";
import {
  BookmarkIcon,
  BookOpenIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
const Main = () => {
  const [tabs, setTabs] = useState([
    "www.github.com/aziz-codes",
    "www.linkdin.com/aziz-codes",
    "www.twitter.com/aziz-codes",
    "www.instagram.com/aziz-codes",
    "www.facebook.com/aziz-codes",
  ]);
  return (
    <div
      className="min-w-[400px] flex
   flex-col gap-2"
    >
      <div className="flex flex-row items-center mt-5 border ml-5 mr-5 rounded-md">
        <input
          type="text"
          className="outline-none  rounded-md p-1 w-96 mr-4 ml-4 "
          placeholder="Enter custom address"
        />
        <BookOpenIcon className="h-6 w-6 cursor-pointer" title="Save" />
      </div>
      <div className="flex flex-row gap-4 w-full justify-between px-5 ">
        <BookmarkIcon
          className="h-7 w-7 hover:text-sky-500 cursor-pointer"
          title="Save current tab"
        />
        <div className="flex gap-4">
          <label className="text-sky-500 text-xs font-semibold">
            Count: <span className="text-black">{tabs.length}</span>
          </label>
          <TrashIcon
            className="h-4 w-4 cursor-pointer hover:text-red-500"
            title="delete all"
          />
        </div>
      </div>
      <div className="w-full  border"></div>
      <div className="p-1 flex flex-col gap-4 mx-4 min-h-[600px] overflow-y-auto">
        {tabs.map((tab, i) => (
          <div className="flex flex-row  gap-3  w-96" key={i}>
            <TrashIcon className="h-6 w-6 cursor-pointer hover:text-red-500" />
            <a href={tab} className="hover:text-sky-500 transition-all">
              {tab}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
