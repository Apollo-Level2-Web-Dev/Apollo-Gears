"use server";

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
