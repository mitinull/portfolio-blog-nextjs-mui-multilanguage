import Link from "next/link";

export default function NotFound({ params }) {
  console.log(params);

  return (
    <div>
      <h2>(ارور شمارهٔ ۴۰۴)</h2>
      <h2>اصلا همچین صفحه‌ای نداریم!</h2>
      <Link href="/fa">بازگشت به صفحهٔ اصلی</Link>
    </div>
  );
}
