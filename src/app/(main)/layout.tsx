import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/ui/footer";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
