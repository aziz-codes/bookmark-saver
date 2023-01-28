import React from "react";

const Test = () => {
  let sum = 0;
  const handleClick = async () => {
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    await console.log("hello");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Test;
