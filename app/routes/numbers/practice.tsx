import { Link } from "@remix-run/react";
export default function Practice() {

  return (
    <div className="font-sans flex flex-col items-center justify-center h-screen gap-6">
      <div className="flex top-0 fixed m-10 w-full justify-center">
        <h1 className="text-2xl uppercase ">Practice Numbers</h1>
      </div>
      <div className="flex m-10 w-full justify-center">
        <h1 className="text-1xl uppercase ">Select a level</h1>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link
          to="/numbers/practice/level?range=10"
          className="bg-blue-400 uppercase p-5 rounded-lg w-3/4 justify-center items-center flex text-2xl"
        >
          1 - 10
        </Link>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link
          to="/numbers/level?range=100"
          className="bg-blue-400 uppercase p-5 rounded-lg w-3/4 justify-center items-center flex text-2xl"
        >
          1 - 100
        </Link>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link
          to="/numbers/practice/level?range=1000"
          className="bg-blue-400 uppercase p-5 rounded-lg w-3/4 justify-center items-center flex text-2xl"
        >
          1 - 1000
        </Link>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link
          to="/numbers/practice/level?range=9999"
          className="bg-blue-400 uppercase p-5 rounded-lg w-3/4 justify-center items-center flex text-2xl"
        >
          1 - 9999
        </Link>
      </div>
    </div>
  );
}
