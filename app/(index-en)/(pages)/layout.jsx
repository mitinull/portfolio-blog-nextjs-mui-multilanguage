import { GoToHomeButton } from "@/components/GoToHomeButton";

export default function EnPagesLayout({ children }) {
  return (
    <>
      {children}
      <GoToHomeButton lang="en" />
    </>
  );
}
