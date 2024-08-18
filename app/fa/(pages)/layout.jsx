import { GoToHomeButton } from "@/components/GoToHomeButton";

export default function FaPagesLayout({ children }) {
  return (
    <>
      {children}
      <GoToHomeButton lang="fa" />
    </>
  );
}
