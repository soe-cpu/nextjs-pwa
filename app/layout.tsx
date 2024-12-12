import Header from "@/components/shared/Header";
import "./globals.css";
import BottomNav from "@/components/shared/BottomNav";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="py-8 lg:min-h-[100vh]">{children}</div>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
