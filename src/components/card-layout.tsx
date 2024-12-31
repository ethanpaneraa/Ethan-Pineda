export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111] border border-white p-4 md:p-8 mx-4 md:mx-0 max-w-2xl">
      {children}
    </div>
  );
}
