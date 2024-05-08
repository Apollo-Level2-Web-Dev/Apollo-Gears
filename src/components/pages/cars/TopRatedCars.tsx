import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function TopRatedCars() {
  return (
    <div className="gap-2 grid grid-cols-12  mx-auto mt-10">
      
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          as={NextImage}
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MXwwfHx8MA%3D%3D"
          width={500}
          height={500}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Plant a tree
          </p>
          <h4 className="text-white font-medium text-large">
            Contribute to the planet
          </h4>
        </CardHeader>
        <Image
          as={NextImage}
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfDF8MHx8fDA%3D"
          width={500}
          height={500}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Supercharged
          </p>
          <h4 className="text-white font-medium text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <Image
          as={NextImage}
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfDF8MHx8fDA%3D"
          width={500}
          height={500}
        />
      </Card>
    </div>
  );
}
