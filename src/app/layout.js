import { Inter } from "next/font/google";
import "./globals.css";

import { AuthContextProvider } from "./(auth)/context/AuthContext";
import TanstackProvider from "@/components/providers/TanstackProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expo elite",
  description: "Make by Team Natural ninjas",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light">
      <body className="overflow-x-hidden scrollbar-thin scrollbar-rounded scrollbar-thumb-rose-500 scrollbar-track-gray-400">
        <TanstackProvider>
          <AuthContextProvider>

            {children}

          </AuthContextProvider>

        </TanstackProvider>


      </body>
    </html>
  );
}
