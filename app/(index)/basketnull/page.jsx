import Link from "next/link";

export const metadata = {
  title: "Basketnull",
  description: "Basketnull is a 2d web game.",
  
  alternates: {
    canonical: "/basketnull",
  },
};

export default function Basketnull() {
  return (
    <main>
      <h1>Basketnull</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
