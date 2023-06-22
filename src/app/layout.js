import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Ryosuke's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen flex flex-col relative"}>
        <nav>
          <Navbar className="font-poppins" />
        </nav>
        <main className="flex-1 mt-20">{children}</main>
        <footer className="bg-[#A29F85] text-[#ffffff]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}