import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/ui/footer";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="editorial-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
