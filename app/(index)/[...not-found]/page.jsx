import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found! (404)</h2>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
}
