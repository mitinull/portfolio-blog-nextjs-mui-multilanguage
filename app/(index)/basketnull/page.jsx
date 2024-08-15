import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { generateHreflang } from "@/utils/generateHreflang";
import { Stack } from "@mui/system";
import Link from "next/link";

export const metadata = {
  title: "Basketnull",
  description: "Basketnull is a 2d web game.",

  // ...generateHreflang("basketnull", "en"),
};

export default function Basketnull() {
  return (
    <main>
      <PageHeader>
        <Stack spacing={3} px={4}>
          <Heading1>Basketnull</Heading1>
          <Heading3>
            Basketnull is a 2D web-based game that I developed using Lua and the
            Love2D framework.
          </Heading3>
        </Stack>
      </PageHeader>
    </main>
  );
}
