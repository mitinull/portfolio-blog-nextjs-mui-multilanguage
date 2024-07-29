import { ROOT_URL } from "@/utils/constants";

export const metadata = {
  metadataBase: new URL(ROOT_URL),
  title: {
    template: "Mitinull > %s",
    default: "Mitinull",
  },
  description:
    "Mitinull's portfolio highlights a range of projects in web, software and game development, innovative design, creative tech solutions, etc. Explore the latest work and discover more unique content by Mitinull.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-light.svg",
        href: "/images/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon.svg",
        href: "/images/icon-dark.svg",
      },
    ],
  },
  creator: "Mitinull",
  authors: [{ name: "Mitinull", url: "https://github.com/mitinull" }],
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Frontend",
    "Mitinull",
    "Portfolio",
    "Projects",
  ],
};

export default function RootLayout({ children }) {
  return children;
}
