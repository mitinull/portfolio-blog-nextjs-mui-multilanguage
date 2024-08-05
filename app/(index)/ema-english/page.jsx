import { generateHreflang } from "@/utils/generateHreflang";
import Link from "next/link";

export const metadata = {
  title: "EMA English",
  description: "EMA English is a persian podcast.",

  // ...generateHreflang("ema-english", "en"),
};

export default function Basketnull() {
  return (
    <main style={{ gap: 15, display: "flex", flexDirection: "column" }}>
      <h1>EMA English</h1>
      <h3>
        EMA English is a Persian podcast for learning English with musics, songs
        and lyrics. 🎧📃
      </h3>
      <p>
        I'm neither a master at teaching English nor a music lover. However,
        English songs and music have played a significant role in my English
        learning journey, and I wanted to share this experience with others.📚🤓
      </p>
      <p>
        I didn't know what <b>"glitter"</b> meant until I heard Dua Lipa's voice
        singing, "<b>Glitter</b> in the sky, <b>glitter</b> in our eyes, shining
        just the way we are." After that, I looked up the meaning of{" "}
        <b>"glitter"</b> once, and it was enough for me to remember it forever!
        Do you know why I know the meaning of <b>"ambition"</b>? Because "All my
        friends are toxic, all <b>ambitionless</b>, so rude and always
        negative!" (this is another song if you haven't figured it out.)
      </p>
      <p>
        EMA English was created in the summer of 2022. We—Ebrahim, Mohammad, and
        Arad (or EMA)—were bored and thought, "Let's do something!💪" That's
        when we came up with the idea to record a podcast and teach English
        through lyrics, as we had been learning English together using song
        lyrics before.
      </p>
      <p>
        We started recording several episodes and uploaded them to Castbox.
        Initially, we thought, "OMG, this is awful.😅" We had bad microphones,
        and we couldn't speak fluently, even in Persian! But it was fun, so we
        kept doing it. After recording several episodes, we gained more
        subscribers than we expected. However, we got busy and stopped recording
        for a while. Eventually, with just a few episodes, we ended up with more
        than 500 subscribers without even telling anybody about the podcast!
      </p>
      <p>
        You can subscribe to the Persian podcast EMA English on Castbox, follow
        our Telegram channel (@emaEnglish), or listen to episodes on the EMA
        English page on Castbox. Thanks for reading, and I hope there will be
        glitter in your eyes! ✨👀
      </p>
      <Link href="/">Home</Link>
    </main>
  );
}
