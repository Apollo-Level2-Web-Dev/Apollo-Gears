"use server";

import { cookies } from "next/headers";

export async function loginUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const { data } = await res.json();
    cookies().set("accessToken", data.accessToken);
    cookies().set("refreshToken", data.refreshToken);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function signUpUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const res = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const  data  = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
