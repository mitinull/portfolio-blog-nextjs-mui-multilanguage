import { ROOT_URL } from "@/utils/constants";

export const metadata = {
  metadataBase: new URL(ROOT_URL),
  title: {
    template: "Mitinull > %s",
    default: "Mitinull",
  },
  description:
    "Mitinull's portfolio and blog present an exciting mix of web development, software engineering, and game development projects, along with creative works and personal projects.",
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
};

export default function RootLayout({ children }) {
  return children;
}
