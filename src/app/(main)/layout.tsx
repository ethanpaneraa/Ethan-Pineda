import { Navbar } from "@/components/nav-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Navbar />
        {children}
      </div>
    </>
  );
}
