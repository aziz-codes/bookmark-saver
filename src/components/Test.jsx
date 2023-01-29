import React from "react";

const Test = () => {
  // handler for handle click event on button
  const handleClick = () => {
    console.log("hello world");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Test;
