import { HomeProvider } from "./context/HomeContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "Lokaci Landing Page",
  description: "This is lokaci page.",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <HomeProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </HomeProvider>
      </body>
    </html>
  );
}