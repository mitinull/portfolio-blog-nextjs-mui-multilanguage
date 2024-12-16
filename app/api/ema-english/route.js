import { ROOT_URL } from "@/utils/constants";

export async function GET() {
  try {
    const infoResponse = await fetch(`${ROOT_URL}/api/ema-english/info`, {
      next: { revalidate: 60 },
    });

    if (!infoResponse.ok) throw new Error("Error fetching /info");

    const infoData = await infoResponse.json();

    const commentsResponse = await fetch(
      `${ROOT_URL}/api/ema-english/comments`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!commentsResponse.ok) throw new Error("Error fetching /comments");

    const commentsData = await commentsResponse.json();

    return Response.json({
      subs: infoData.subs,
      plays: infoData.plays,
      comments: commentsData.comments,
    });
  } catch (err) {
    console.log("Server Error");
    return Response.json("Unable to fetch data from CastBox!", { status: 502 });
  }
}
