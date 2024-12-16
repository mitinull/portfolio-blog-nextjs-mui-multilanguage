import { ROOT_URL } from "@/utils/constants";
import { SHA256 } from "crypto-js";
import Sentiment from "sentiment";

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

function removeDuplicates(comments) {
  const seen = new Set();
  return comments.filter((comment) => {
    const commentString = comment.username + comment.date + comment.description;
    if (seen.has(commentString)) {
      return false; // Skip duplicates
    }
    seen.add(commentString);
    return true;
  });
}

function generateCommentId({ username, date, description }) {
  const data = `${username}-${date}-${description}`;
  return SHA256(data).toString();
}

export async function GET() {
  const sentiment = new Sentiment();

  try {
    const response = await fetch(`${ROOT_URL}/api/ema-english/info`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(res.status);
    }

    const data = await response.json();

    const { comments: initialComments } = data;

    const uniqueComments = removeDuplicates(initialComments);

    const commentsWithIdAndTranslation = await Promise.all(
      uniqueComments.map(async (comment) => {
        const translatedDescription = await translateFaToEn(
          comment.description
        );

        return {
          ...comment,
          description: { fa: comment.description, en: translatedDescription },
          id: generateCommentId(comment),
        };
      })
    );

    const pickedComments = commentsWithIdAndTranslation.filter((comment) => {
      const comparative = sentiment.analyze(comment.description.en).comparative;
      return comparative > 0.2;
    });

    return Response.json({ comments: pickedComments });
  } catch (err) {
    console.log("Comments Error", err);
    return Response.json("Unable to get comments!", { status: 502 });
  }
}
