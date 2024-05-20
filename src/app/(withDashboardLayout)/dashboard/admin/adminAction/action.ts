"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addCarAction(pre: FormData, fromData: FormData) {
  try {
    const newFromData = {
      ...Object.fromEntries(fromData),
      rating: Number(Object.fromEntries(fromData).rating),
      passengerCapacity: Number(Object.fromEntries(fromData).passengerCapacity),
    };
    const formattedData = JSON.stringify(newFromData);
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");
    const res = await fetch(`${process.env.serverUrl}/cars`, {
      method: "POST",
      headers: headers,
      body: formattedData,
    });
    const data = await res.json();
    revalidateTag("cars");
    return data;
  } catch (error) {
    throw error;
  }
}
export async function updateCarAction(
  carId: string,
  pre: FormData,
  fromData: FormData
) {
  try {
    const newFromData = {
      ...Object.fromEntries(fromData),
      rating: Number(Object.fromEntries(fromData).rating),
      passengerCapacity: Number(Object.fromEntries(fromData).passengerCapacity),
    };
    const formattedData = JSON.stringify(newFromData);
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");
    const res = await fetch(`${process.env.serverUrl}/cars/${carId}`, {
      method: "PATCH",
      headers: headers,
      body: formattedData,
    });
    const data = await res.json();
    revalidateTag("cars");
    return data;
  } catch (error) {
    throw error;
  }
}
