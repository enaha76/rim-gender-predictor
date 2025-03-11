import { Head } from "$fresh/runtime.ts";
import TabNavigation from "../islands/TabNavigation.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gender Prediction</title>
      </Head>
      <TabNavigation />
    </>
  );
}