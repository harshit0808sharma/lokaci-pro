import { HomeProvider } from "./context/HomeContext";
import "./globals.css";

export const metadata = {
  title: "Lokaci Landing Page",
  description: "This is lokaci page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HomeProvider>
          {children}
        </HomeProvider>
      </body>
    </html>
  );
}