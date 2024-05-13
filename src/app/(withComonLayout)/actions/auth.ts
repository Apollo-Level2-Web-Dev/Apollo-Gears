"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function loginUser(pre: FormData, formData: FormData) {
  try {
    const formattedData = JSON.stringify(Object?.fromEntries(formData));
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      cache: "no-cache",
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
    decodedData = (await jwtDecode(accessToken)) as any;
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

export const userInfo = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = (await jwtDecode(accessToken)) as any;
    return { email: decodedData.email, role: decodedData.role };
  } else {
    return null;
  }
};
export const logOut = async () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
export const getCooke = async (cooke: string) => {
  return cookies().get(cooke)?.value;
};
