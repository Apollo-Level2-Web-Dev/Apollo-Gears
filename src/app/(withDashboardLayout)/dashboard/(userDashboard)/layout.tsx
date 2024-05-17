import UserLayout from "./layout/userLayout";

export default function userLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserLayout>
        {children}
      </UserLayout>
    </div>
  );
}
