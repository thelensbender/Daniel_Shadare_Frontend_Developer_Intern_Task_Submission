import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
   subsets: ["latin"],
   variable: "--font-nunitosans",
})

const nunito = Nunito({
   subsets: ["latin"],
   variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Tobams Group",
  description: "A static website created for the Frontend Intern task by Ijinlifeoluwa Daniel Shadare",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunito.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}