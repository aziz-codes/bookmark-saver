import React, { useState, useLayoutEffect } from "react";
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
const Main = () => {
  const [myTabs, setMyTabs] = useState([]);
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useLayoutEffect(() => {
    let links = JSON.parse(localStorage.getItem("links"));
    if (links) {
      setMyTabs(links);
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
    if (myTabs.includes(address)) {
      errorHandler("This tab already exists");
    } else if (address.length < 4) {
      errorHandler("Link is too short");
    } else {
      const newTabs = [...myTabs, address];
      setMyTabs(newTabs);
      localStorage.setItem("links", JSON.stringify(newTabs));
      // setAddress("");
      errorHandler("");
    }
  };
  // handler to remove single tab
  const handleSingleLinkDelete = (tab) => {
    const filteredLinks = myTabs.filter((item) => item !== tab);

    setMyTabs(filteredLinks);

    localStorage.setItem("links", JSON.stringify(filteredLinks));
  };

  // handler to remove all tabs.

  const handleDeleteAll = () => {
    localStorage.clear();
    setMyTabs([]);
  };

  const handleAddCurrentTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // myLeads.push(tabs[0].url);
      setMyTabs([...myTabs, tabs[0].url]);
      localStorage.setItem("links", JSON.stringify(myTabs));
    });
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
        <button
          className="rounded-sm bg-sky-500 text-sm text-white p-1 font-semibold"
          onClick={handleAddCurrentTab}
        >
          Save Current Tab
        </button>
        <div className="flex gap-4">
          <label className="text-sky-500 text-xs font-semibold">
            Count: <span className="text-black">{myTabs.length}</span>
          </label>
          <TrashIcon
            className="h-4 w-4 cursor-pointer hover:text-red-500"
            title="delete all"
            onClick={handleDeleteAll}
          />
        </div>
      </div>
      <div className="w-full  border"></div>

      {errorMessage && (
        <p className="p-1 text-xs text-red-500">{errorMessage}</p>
      )}
      <div className="p-1 flex flex-col gap-4 mx-4 min-h-[600px] overflow-y-auto">
        {myTabs.length > 0
          ? myTabs.map((tab, i) => (
              <div className="flex flex-row  gap-3  w-96" key={i}>
                <TrashIcon
                  className="h-5 w-5 cursor-pointer hover:text-red-500"
                  onClick={() => {
                    handleSingleLinkDelete(tab);
                  }}
                />
                <a
                  href={tab}
                  className="hover:text-sky-500 transition-all text-sm"
                >
                  {tab}
                </a>
              </div>
            ))
          : "You have't any saved tabs yet."}
      </div>
    </div>
  );
};

export default Main;
