import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
