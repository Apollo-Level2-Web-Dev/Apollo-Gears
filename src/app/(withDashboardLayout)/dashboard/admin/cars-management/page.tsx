import { cookies } from "next/headers";
import CarsTable from "./components/CarsTable";

export default async function carsPage() {
  const res = await fetch("http://localhost:5000/api/v1/cars", {
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
      <CarsTable data={data}></CarsTable>
    </div>
  );
}
