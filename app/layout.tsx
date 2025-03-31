import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Syne} from "next/font/google";

const site_font = Syne({subsets: ["greek"]});

export const metadata = {
  title: "NotedAdDigital - Best Digital Marketing Agency in Jalandhar",
  description: "NotedAdDigital is a top-rated digital marketing agency in Jalandhar, providing expert SEO, social media marketing, branding, and performance marketing services to help businesses grow.",
  keywords: "Digital Marketing, SEO, Social Media Marketing, Branding, PPC, Performance Marketing, Jalandhar Marketing Agency, Online Advertising, NotedAdDigital",
  author: "Rituraj Goswami",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={site_font.className}>
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </body>
  </html>
  );
}
