import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Rightbar from "@/components/shared/Rightbar/Rightbar";
import { AuthContextProvider } from "./(auth)/context/AuthContext";
import Footer from "@/components/Homepages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expo elite",
  description: "Make by Team Natural ninjas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="overflow-x-hidden scrollbar-thin scrollbar-rounded scrollbar-thumb-rose-500 scrollbar-track-gray-400">
        <AuthContextProvider>
          <div>
            <div className="bg-[#F9FAFE]    rounded-t-2xl">
              <div className="flex flex-1">
                <Sidebar />
                <div className=" w-full  min-h-screen shadow-md rounded-t-2xl ">
                  <Navbar />
                  <div className="flex justify-between ">
                    <div className="md:mx-60 mx-4 relative top-20 min-h-screen">
                      {children}
                    </div>
                    <Rightbar />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
