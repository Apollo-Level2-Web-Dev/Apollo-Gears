import { cookies } from "next/headers";
import CarsTable from "./components/CarsTable";
import { Metadata } from "next";
import AddCar from "./components/AddCar";
export const metadata: Metadata = {
  title: "cars",
  description: " Apollo Gears.",
};
export default async function carsPage() {
  const res = await fetch(`${process.env.serverUrl}/cars?limit=200`, {
    next:{
      tags:["cars"],
      
    },
    headers: {
      Authorization: cookies().get("accessToken")?.value || "",
    },
  });
  const {data} = await res.json()
  // console.log(data)
  return (
    <div className="mx-6 mt-3">
      <AddCar ></AddCar>
      <CarsTable  data={data}></CarsTable>
    </div>
  );
}
