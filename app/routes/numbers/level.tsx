import { useState } from "react";

export default function Level() {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const randomNumber = (end: number): void => {
    setSelectedNumber(Math.floor(Math.random() * end) + 1);
  };

  setTimeout(() => {
    randomNumber(10);
  }, 3000);

  return (
    <>
      <h1>Practice</h1>
      <p>{selectedNumber}</p>
    </>
  );
}
