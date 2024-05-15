import React from 'react'
import CarsTable from '../components/CarTable'
import { cookies } from 'next/headers';

const RequestCarPage = async () => {
  const res = await fetch(`${process.env.serverUrl}/cars?limit=200`, {
    next:{
      tags:["cars"],
      
    },
    headers: {
      Authorization: cookies().get("accessToken")?.value || "",
    },
  });
  const {data} = await res.json()
  return (
    <div>
      <CarsTable data={data}></CarsTable>
    </div>
  )
}

export default RequestCarPage