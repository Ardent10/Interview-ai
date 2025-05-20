import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="p-6">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
