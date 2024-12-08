
import Herosec from "@/components/Herosec";
import PickUp from "@/components/Pickup";
import Swipe from "@/components/subcomponents/Swipe";
import ProductSec from "@/components/ProductSec";



export default async function Home() {

  return (
    <div className=" bg-gray-100">
    <Herosec/>
    <PickUp/>
    <Swipe/>
    <ProductSec/>
    </div>
  );
}
