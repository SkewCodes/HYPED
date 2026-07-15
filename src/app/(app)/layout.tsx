import { Nav } from "@/components/Nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav variant="app" />
      <main className="pt-20">{children}</main>
    </>
  );
}
