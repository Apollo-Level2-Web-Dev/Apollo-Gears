import type { Metadata } from "next";
import NavBar from "./components/shared/Navbar";
import { userInfo } from "./action/authAction";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user= await userInfo()
  return (
    <div>

      <NavBar user={user} ></NavBar>
      <div className="mx-auto container">{children}</div>
      <p>footer</p>
    </div>
  );
}
