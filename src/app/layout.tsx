import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Página de links",
  description: "Clique em nossos links e conheça-nos.",
  openGraph: {
    title: "Página de links",
    description: "Clique em nossos links e conheça-nos.",
    url: "https://fhase2-uniformes-e-fardamentos.netlify.app/",
    siteName: "Fhase2 Uniformes",
    images: [
      {
        url: "https://fhase2-uniformes-e-fardamentos.netlify.app/images/logo.png", // imagem de destaque
        width: 1200,
        height: 630,
        alt: "Imagem de capa para compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
