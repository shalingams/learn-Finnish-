import { useState } from "react";

export default function Count() {
  // function Speak() {
  //   // Create a SpeechSynthesisUtterance
  //   const utterance = new SpeechSynthesisUtterance("aamupäivä");

  //   // Select a voice
  //   const voices = speechSynthesis.getVoices();
  //   utterance.voice = voices[1]; // Choose a specific voice
  //   utterance.lang = "fi";
  //   // Speak the text
  //   speechSynthesis.speak(utterance);
  // }

  const [page, setPage] = useState(0);
  const [textLabel, setTestLabel] = useState("Select a Number");
  const collection = [
    [
      { num: 1, text: "yksi" },
      { num: 2, text: "kaksi" },
      { num: 3, text: "kolme" },
      { num: 4, text: "neljä" },
      { num: 5, text: "viisi" },
      { num: 6, text: "kuusi" },
      { num: 7, text: "seitsemän" },
      { num: 8, text: "kahdeksan" },
      { num: 9, text: "yhdeksän" },
      { num: 10, text: "kymmenen" },
    ],
    [
      { num: 11, text: "yksitoista" },
      { num: 12, text: "kaksitoista" },
      { num: 13, text: "kolmetoista" },
      { num: 14, text: "neljätoista" },
      { num: 15, text: "viisitoista" },
      { num: 16, text: "kuusitoista" },
      { num: 17, text: "seitsemäntoista" },
      { num: 18, text: "kahdeksantoista" },
      { num: 19, text: "yhdeksäntoista" },
      { num: 20, text: "kaksikymmentä" },
    ],
  ];

  function nextPage() {
    setPage(page + 1);
    setTestLabel("Select a Number");
  }

  function prevPage() {
    page == 0 ? setPage(0) : setPage(page - 1);
    setTestLabel("Select a Number");
  }

  const changeLabel = (text: string) => {
    setTestLabel(text);
  };

  return (
    <div className="flex flex-col bg-teal-200 w-full min-h-screen items-center p-10">
      <div className="flex">
        <p className="text-black w-full text-2xl m-3">{textLabel}</p>
      </div>
      <div className="flex flex-col m-3 w-3/4 fixed bottom-12">
        <div className="flex flex-wrap justify-center items-center ">
          {collection[page].map((column, index) => (
            <button
              className="flx p-5 bg-green-300 m-2 text-2xl w-16"
              key={index}
              onClick={() => changeLabel(column.text)}
            >
              {column.num}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-end mt-10">
          <button className="flx p-5 bg-green-300 text-xl" onClick={prevPage}>
            Prv
          </button>
          <button className="flx p-5 bg-green-300 text-xl" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
