import Image from "next/image";
import Jumbotron from "./_components/jumbotrun";
import { jumbotronData } from "@/utils/constants";
import TrendingCategory from "./_components/trending-categories";

export default function Home() {
  return (
    <main className=" space-y-20">
      <Jumbotron data={jumbotronData} />
      <TrendingCategory />
      <div className=" h-screen w-full"></div>
    </main>
  );
}
