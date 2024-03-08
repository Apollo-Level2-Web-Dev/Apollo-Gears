import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import NextImage from "next/image";
import BannerButton from "./BannerButton";

export default function Banner() {

  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="flex items-center justify-between">
          <div className="w-2/5">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
              Explore the Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals
            </h4>
            <BannerButton />
          </div>
          <div className="w-3/5 flex justify-end">
            <Image
              as={NextImage}
              alt="Card background"
              className="object-cover rounded-xl"
              src="../../assets/hero-car.svg"
              width={750}
              height={750}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
