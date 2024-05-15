
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

type TProps = {
  params: { id: string };

};

const CarDetailsPage = async ({ params }: TProps) => {
  const res = await fetch(`${process.env.serverUrl}/cars/${params.id}`, {
    next: {
      tags: ["car"],
    },
  });
  const  {data}  = await res.json();

  return (
    <div>
     <Card key={data?._id} className="w-full ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {" "}
                rating: {data?.rating}
              </p>
              <h4 className="text-white font-extrabold text-2xl">{data?.name}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={data?.image}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white font-bold text-tiny">brand: {data?.brand}</p>
                <p className="text-white text-tiny">Color: {data?.color}</p>
              </div>
              
            </CardFooter>
          </Card>
    </div>
  );
};

export default CarDetailsPage;
