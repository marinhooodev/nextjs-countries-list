import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Lista de países",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white shadow-xl flex items-center justify-center p-2">
            <section className="container flex items-center gap-3">
              <Image
              src="/logo.svg"
              alt="Logotipo"
              width={70}
              height={70}
              className="max-w-[70px]"
              />
              <h1 className="font-bold text-2xl">Lista de Países</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
