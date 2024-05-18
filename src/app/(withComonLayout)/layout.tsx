import type { Metadata } from "next";
import { userInfo } from "./actions/auth";
import Footer from "./components/pages/shared/Footer";
import NavBar from "./components/pages/shared/Navbar";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Book your next adventure with Apollo Gears.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInfo();
  return (
    <div>
      <NavBar user={user} />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
}
