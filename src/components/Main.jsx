import React, { useState } from "react";

const Main = () => {
  const [tabs, setTabs] = useState([]);
  return (
    <div
      className="text-red-500 min-w-[400px] flex
   flex-col gap-2"
    >
      <div className="p-1">Hello</div>
    </div>
  );
};

export default Main;
