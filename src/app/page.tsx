import { Navbar } from "@/components/Navbar";
import Herosec from "@/components/Herosec";


export default async function Home() {

  return (
    <div className=" h-[300vh]">
      <Navbar/>
      <Herosec/>
    </div>
  );
}
