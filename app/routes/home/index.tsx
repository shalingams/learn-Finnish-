import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Finnish" },
    {
      name: "description",
      content: "Learn Finnish by Practicing",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4 flex flex-col items-start min-h-screen">
      <div className="flex m-10 w-full">
        <h1 className="text-2xl">Welcome to Learn Finnish</h1>
      </div>
      <div className="flex">
        <ul className="m-4 pl-6 space-y-2">
          <li className="h-7 m-5 uppercase">Lets Learn</li>
          <li className="h-7 m-5">
            <Link
              className="text-blue-700 underline visited:text-purple-900"
              to="/numbers"
            >
              Numbers
            </Link>
          </li>
          <li className="h-7 m-5">
            <Link
              className="text-blue-700 underline visited:text-purple-900"
              to="/words"
            >
              Words
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
