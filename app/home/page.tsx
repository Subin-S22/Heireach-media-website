import CompanyDescription from "@/features/home/CompanyDescription";
import InitialView from "@/features/home/InitialView";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <InitialView />
        <CompanyDescription />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
