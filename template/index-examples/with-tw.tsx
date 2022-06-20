import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-1/2 min-h-screen mx-auto">
        <h1 className="font-extrabold text-center text-7xl">
          Create <span className="text-blue-500">T3</span> App
        </h1>

        <div className="w-fit">
          <h3 className="mt-4 text-3xl">This Stack uses:-</h3>
          <ul className="self-start text-xl underline list-disc">
            <li>
              <a href="https://nextjs.org" target="_blank">
                Next.js
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" target="_blank">
                TailwindCSS
              </a>
            </li>
            <li>
              <a href="https://typescriptlang.org" target="_blank">
                TypeScript
              </a>
            </li>
          </ul>
          <div id="trpcUsage" />
        </div>
      </div>
    </>
  );
};

export default Home;
