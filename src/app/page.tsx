import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Navbar } from "@/components/Navbar";
import Herosec from "@/components/Herosec";


async function Getdata(){
  const fetchData = await client.fetch(`*[_type == "profile"]`)
return fetchData;
}

export default async function Home() {

const data = await Getdata();



  return (
    <div className=" h-[300vh]">
      <Navbar/>
      <Herosec/>
    </div>
  );
}
