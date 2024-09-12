import Image from "next/image";
import Navbar from "../components/header"
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <h1 className="p-20">Home</h1>
    </div>
  );
}
