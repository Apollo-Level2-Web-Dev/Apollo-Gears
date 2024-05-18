"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function creteACar(pre: FormData, formData: FormData) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      rating: Number(Object?.fromEntries(formData).rating),
      passengerCapacity: Number(
        Object?.fromEntries(formData).passengerCapacity
      ),
    };

    const formattedData = JSON.stringify(newFormData);

    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/cars`, {
      method: "POST",
      headers: headers,
      body: formattedData,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function updateCar(
  carId: string,
  pre: FormData,
  formData: FormData
) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      rating: Number(Object?.fromEntries(formData).rating),
      passengerCapacity: Number(
        Object?.fromEntries(formData).passengerCapacity
      ),
    };

    const formattedData = JSON.stringify(newFormData);

    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/cars/${carId}`, {
      method: "PATCH",

      headers: headers,
      body: formattedData,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteCar(carId: string) {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/cars/${carId}`, {
      method: "DELETE",
      headers: headers,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// "use server";

// import { revalidateTag } from "next/cache";
// import { cookies } from "next/headers";

// // Helper function to get access token and set headers
// function getHeaders() {
//   const accessToken = cookies().get("accessToken")?.value;
//   if (!accessToken) throw new Error("No access token found");
//   const headers = new Headers();
//   headers.append("Authorization", accessToken);
//   headers.append("Content-Type", "application/json");
//   return headers;
// }

// // Helper function to format form data
// function formatFormData(formData) {
//   const formDataObj = Object.fromEntries(formData);
//   return JSON.stringify({
//     ...formDataObj,
//     rating: Number(formDataObj.rating),
//     passengerCapacity: Number(formDataObj.passengerCapacity),
//   });
// }

// Helper function to handle fetch requests
// async function handleFetch(url, options) {
//   const res = await fetch(url, options);
//   revalidateTag("cars");
//   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//   return res.json();
// }

// // Function to create a car
// export async function createACar(pre, formData) {
//   try {
//     const headers = getHeaders();
//     const body = formatFormData(formData);
//     const url = `${process.env.serverUrl}/cars`;
//     return await handleFetch(url, { method: "POST", headers, body });
//   } catch (error) {
//     throw error;
//   }
// }

// // Function to update a car
// export async function updateCar(carId, pre, formData) {
//   try {
//     const headers = getHeaders();
//     const body = formatFormData(formData);
//     const url = `${process.env.serverUrl}/cars/${carId}`;
//     return await handleFetch(url, { method: "PATCH", headers, body });
//   } catch (error) {
//     throw error;
//   }
// }

// // Function to delete a car
// export async function deleteCar(carId) {
//   try {
//     const headers = getHeaders();
//     const url = `${process.env.serverUrl}/cars/${carId}`;
//     return await handleFetch(url, { method: "DELETE", headers });
//   } catch (error) {
//     throw error;
//   }
// }
