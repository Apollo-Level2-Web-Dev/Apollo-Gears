import { Metadata } from "next";
import CarsTable from "../components/CarsTable";
import { cookies } from "next/headers";
import AddCar from "../components/AddCar";
export const metadata: Metadata = {
  title: "cars mange",
  description: "card mange for and ",
};
const CarsManagementPage  = async () => {
  const res = await fetch(`${process.env.serverUrl}/cars`,{
    next:{
      tags:["cars"]
    },
    // headers:{
    //   Authorization:cookies().get("accessToken")?.value || ""
    // }
  })
  const {data} = await res.json()
  
  return (
    <div className="mx-6 mt-3">
      <AddCar></AddCar>
      <CarsTable data={data}></CarsTable>
    </div>
  );
};

export default CarsManagementPage;
