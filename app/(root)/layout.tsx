import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body className="h-full bg-black w-full">
            <Header/>
        {children}
        <Footer/>
        </body>

    );
  }
  