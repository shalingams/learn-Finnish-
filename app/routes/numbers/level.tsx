import { useSearchParams } from "@remix-run/react";
import { useState } from "react";

export default function Level() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const randomNumber = (end: number): void => {
    setSelectedNumber(Math.floor(Math.random() * end) + 1);
  };

  const checkAnswer = (num: number): void => {
    num
  }

  setTimeout(() => {
    randomNumber(10);
  }, 3000);

  return (
    <div className="flex flex-col justify-center items-center h-screen m-5 gap-4">
      <div className="flex top-10 fixed">
        <h1>Practice Numbers</h1>
        <p>{searchParams.get("range")}</p>
      </div>
      <div className="flex uppercase">
        <p>Points: {points}</p>
      </div>
      <div className="flex">
        <p>{0}</p>
      </div>
      <div className="flex">
        <span id="answer" className="h-7 bg-red-300 p-5 justify-center mb-5">
          Select Your Answer
        </span>
      </div>
      <div className="flex w-3/4 justify-between">
        <button
          onClick={() => checkAnswer(1)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          1
        </button>
        <button
          onClick={() => checkAnswer(2)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          2
        </button>
        <button
          onClick={() => checkAnswer(3)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          3
        </button>
      </div>
      <div className="flex w-3/4 justify-between">
        <button
          onClick={() => checkAnswer(4)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          4
        </button>
        <button
          onClick={() => checkAnswer(5)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          5
        </button>
        <button
          onClick={() => checkAnswer(6)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          6
        </button>
      </div>
      <div className="flex w-3/4 justify-between">
        <button
          onClick={() => checkAnswer(7)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          7
        </button>
        <button
          onClick={() => checkAnswer(8)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          8
        </button>
        <button
          onClick={() => checkAnswer(9)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          9
        </button>
      </div>
      <div className="flex w-3/4 justify-between">
        <button className="bg-teal-400 p-5 rounded-lg text-black">1</button>
        <button
          onClick={() => checkAnswer(0)}
          className="bg-teal-400 p-5 rounded-lg text-black"
        >
          0
        </button>
        <button className="bg-teal-400 p-5 rounded-lg text-black">1</button>
      </div>
    </div>
  );
}
