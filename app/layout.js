import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ask pi",
  description: "A platform to ask and solve doubts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
