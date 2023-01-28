import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  BookmarkIcon,
  BookOpenIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
const Main = () => {
  const [tabs, setTabs] = useState([]);
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useLayoutEffect(() => {
    let links = JSON.parse(localStorage.getItem("links"));
    if (links) {
      setTabs(links);
    } else {
      console.log("no link found");
    }
  }, []);
  const errorHandler = (msg) => {
    // const intervalId = setInterval(() => {
    setErrorMessage(msg);
    // }, 3000);
    // clearInterval(intervalId);
  };
  // handler for saving links
  const handleSave = () => {
    if (tabs.includes(address)) {
      errorHandler("This tab already exists");
    } else if (address.length < 4) {
      errorHandler("Link is too short");
      console.log("This tab already lenght");
    } else {
      const newTabs = [...tabs, address];
      setTabs(newTabs);
      localStorage.setItem("links", JSON.stringify(newTabs));
      setAddress("");
    }
  };
  return (
    <div
      className="min-w-[400px] flex
   flex-col gap-2"
    >
      <div className="flex flex-row items-center mt-5 border ml-5 mr-5 rounded-md">
        <input
          defaultValue={address}
          type="text"
          className="outline-none  rounded-md p-1 w-96 mr-4 ml-4 "
          placeholder="Enter custom address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <PlusCircleIcon
          className="h-6 w-6 cursor-pointer hover:text-sky-500"
          title="Save"
          onClick={handleSave}
        />
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

      {errorMessage && (
        <p className="p-1 text-xs text-red-500">{errorMessage}ok</p>
      )}
      <div className="p-1 flex flex-col gap-4 mx-4 min-h-[600px] overflow-y-auto">
        {tabs.map((tab, i) => (
          <div className="flex flex-row  gap-3  w-96" key={i}>
            <TrashIcon className="h-5 w-5 cursor-pointer hover:text-red-500" />
            <a href={tab} className="hover:text-sky-500 transition-all text-sm">
              {tab}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
