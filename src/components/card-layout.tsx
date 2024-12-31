export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111] border border-neutral-400 p-3 sm:p-4 md:p-6 mx-2 sm:mx-4 md:mx-0 w-full max-w-2xl overflow-y-auto max-h-[90vh] md:max-h-none">
      {children}
    </div>
  );
}
