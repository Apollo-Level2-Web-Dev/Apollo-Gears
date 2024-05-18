"use server";

import { cookies } from "next/headers";

export async function RequestACar(
  carId: any,
  pre: FormData,
  formData: FormData
) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      ...carId,
    };
    const formattedData = JSON.stringify(newFormData);
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");
    const res = await fetch(`${process.env.serverUrl}/rents`, {
      method: "POST",
      headers: headers,
      body: formattedData,
    });
    const  data  = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
