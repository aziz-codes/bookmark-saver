import React, { useState } from "react";
import { BookOpenIcon, TrashIcon } from "@heroicons/react/24/outline";
const Main = () => {
  const [tabs, setTabs] = useState([]);
  return (
    <div
      className="min-w-[400px] flex
   flex-col gap-2"
    >
      <div className="flex flex-row items-center mt-5 border m-5 rounded-md">
        <input
          type="text"
          className="outline-none  rounded-md p-1 w-96 mr-4 ml-4 "
          placeholder="Enter custom address"
        />
        <BookOpenIcon className="h-6 w-6 cursor-pointer" title="Save" />
      </div>
      <div className="p-1 flex flex-row gap-4 mx-auto min-h-[600px] overflow-y-auto"></div>
    </div>
  );
};

export default Main;
