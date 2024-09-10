import Footer from "@/components/about/Footer";
import NavBar from "@/components/about/NavBar"
import SideMenu from "@/components/about/SideMenu";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <div className="flex flex-row">
            <div className="basis-1/4 ms-4">
            <SideMenu/>    
            </div>
            <div className="basis-3/4">
            {children}
            </div>
            </div>
        </main>  
        <footer>
            <Footer/>
        </footer>
    </>

  );
}
