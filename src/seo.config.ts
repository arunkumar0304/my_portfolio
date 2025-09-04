import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "Arunkumar | Software Developer",
  description:
    "Software Developer (4.5+ years) skilled in React, Next.js, Angular, Node.js, Express, MySQL, and MongoDB.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.vercel.app/",
    siteName: "Arunkumar Portfolio",
    title: "Arunkumar | Software Developer",
    description:
      "Software Developer (4.5+ years) skilled in React, Next.js, Angular, Node.js, Express, MySQL, and MongoDB.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Arunkumar Portfolio",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};


