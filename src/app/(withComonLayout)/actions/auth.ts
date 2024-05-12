"use server";

import { jwtDecode } from "jwt-decode";
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
    const  data = await res.json();
    cookies().set("accessToken", data.data.accessToken);
    cookies().set("refreshToken", data.data.refreshToken);
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
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function refreshTokenGen() {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
    const now = Date.now() / 1000;
    const buffer = 60;
    const isExpired = decodedData.exp - now <= buffer;
    if (isExpired) {
      try {
        const res = await fetch(
          "http://localhost:5000/api/v1/auth/refresh-token",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Cookie: cookies().toString(),
            },
          }
        );
        const { data } = await res.json();
        cookies().set("accessToken", data.accessToken);
      
      } catch (error) {
        throw error;
      }
    }
  }
}
