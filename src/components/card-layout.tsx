export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111] border border-white p-8 max-w-2xl">
      {children}
    </div>
  );
}
