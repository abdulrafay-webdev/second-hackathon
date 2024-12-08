import { client } from "../../../../sanity/lib/client";


interface PageProps {
    params: {
      id: string;
    };
  }





export default async function Product({ params }: PageProps) {

    const id = params.id;
    console.log(id);

    async function Data() {
        const Product = await client.fetch(`*[_id == "${id}"]`)
        return Product;
    }





    const productData = await Data()




    return (
        <div className=" h-[300vh]">
            <br />
            hello moto


            {productData.map((item: any, i: number) => {
                return (
                    <div key={i}>
                        {item.Price}
                        {item.name}
                    </div>
                )
            })}



        </div>
    );
}