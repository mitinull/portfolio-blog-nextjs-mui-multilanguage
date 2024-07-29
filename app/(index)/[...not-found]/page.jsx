import Link from "next/link";

export default function NotFound({ params }) {
  console.log(params);
  return (
    <div>
      <h2>Not Found! (404)</h2>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
}
