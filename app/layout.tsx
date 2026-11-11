import type { Metadata, Viewport } from "next";
import { Allura, Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "../lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

const cidades = site.cidades.join(" e ");
const descricao = `Nutricionista em ${cidades} (${site.uf}) e online. Acompanhamento nutricional individualizado, baseado em ciência e pensado para a sua rotina.`;

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: `${site.nome} | Nutricionista em ${cidades}`,
  description: descricao,
  openGraph: {
    title: `${site.nome} | Nutricionista`,
    description: descricao,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#3F4934",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.nome} | Nutricionista`,
  description: descricao,
  telephone: `+${site.whatsapp}`,
  areaServed: site.cidades.map((c) => ({
    "@type": "City",
    name: `${c}, ${site.uf}`,
  })),
  ...(site.url ? { url: site.url } : {}),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${montserrat.variable} ${allura.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
