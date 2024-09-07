import type { MetaFunction } from "@remix-run/cloudflare";

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
    <div className="font-sans flex flex-col items-center justify-center h-screen">
      <div className="flex top-0 fixed m-10 w-full justify-center">
        <h1 className="text-2xl">Welcome to Learn Finnish</h1>
      </div>
      <div className="flex">
        <a
          href="/numbers/numbers"
          className="bg-blue-400 uppercase p-10 rounded-lg"
        >
          Start
        </a>
      </div>
    </div>
  );
}
