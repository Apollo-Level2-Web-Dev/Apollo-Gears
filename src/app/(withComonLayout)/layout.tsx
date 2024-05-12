
import type { Metadata } from "next";
import NavBar from "./components/pages/shared/Navbar";
import Footer from "./components/pages/shared/Footer";


export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Book your next adventure with Apollo Gears.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <div className="mx-auto container">{children}</div>
      <Footer />
    </div>
  );
}
