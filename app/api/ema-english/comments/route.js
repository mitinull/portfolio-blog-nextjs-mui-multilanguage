import { ROOT_URL } from "@/utils/constants";

async function translateFaToEn(text) {
  const response = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fa&tl=en&dt=t&q=${encodeURIComponent(
      text
    )}`
  );

  if (!response.ok) {
    throw new Error(`Google Translate error: ${response.statusText}`);
  }

  const data = await response.json();
  const translatedText = data[0].reduce((acc, txt) => acc + txt[0], "");

  return translatedText;
}

export async function GET() {
  try {
    const response = await fetch(`${ROOT_URL}/api/ema-english/info`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(res.status);
    }

    const data = await response.json();

    const { comments } = data;

    const englishComments = await Promise.all(
      comments.map(async (comment) => {
        const translatedDescription = await translateFaToEn(
          comment.description
        );
        return {
          ...comment,
          description: { fa: comment.description, en: translatedDescription },
        };
      })
    );

    return Response.json({ comments: englishComments });
  } catch (err) {
    console.log("Comments Error", err);
    return Response.json("Unable to get comments!", { status: 502 });
  }
}
