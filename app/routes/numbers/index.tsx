import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Numbers in Finnish" },
    {
      name: "description",
      content: "Learn Numbers in Finnish",
    },
  ];
};
export default function Index() {
  return (
    <div className="font-sans flex flex-col items-center justify-center h-screen gap-6">
      <div className="flex top-0 fixed m-10 w-full justify-center">
        <h1 className="text-2xl">Welcome to Learn Finnish</h1>
      </div>
      <div className="flex">
        <Link
          to="/numbers/numbers"
          className="bg-blue-400 uppercase p-10 rounded-lg"
        >
          Start
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/numbers/practice"
          className="bg-blue-400 uppercase p-10 rounded-lg"
        >
          Practice
        </Link>
      </div>
    </div>
  );
}
