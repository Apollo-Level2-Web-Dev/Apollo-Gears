"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function signUpUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.serverUrl}/auth/register`, {
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
export async function loginUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.serverUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
      return data;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
export async function userInfo() {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    if (accessToken) {
      let decodedData = null;
      decodedData = await jwtDecode(accessToken);
      return {
        email: decodedData.email,
        role: decodedData.role,
        id: decodedData.id,
      };
    }
    {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
export async function logOut() {
  try {
   cookies().delete("accessToken")
   cookies().delete("refreshToken")
  } catch (error) {
    throw error;
  }
}
