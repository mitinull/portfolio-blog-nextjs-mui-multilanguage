import parse from "node-html-parser";

export async function GET() {
  try {
    const res = await fetch(
      "https://castbox.fm/channel/EMA-English-%7C-English-Music-%7C-%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A8%D8%A7-%D8%AA%D8%B1%D8%A7%D9%86%D9%87-id5058728?country=en",
      { cache: "no-store" }
    );

    const data = await res.text();

    if (!res.ok) {
      throw new Error(res.status);
    }

    const htmlData = parse(data);

    const subs = htmlData
      .querySelector(".sub_count")
      .textContent.split(":")[1]
      .trim();

    const plays = htmlData
      .querySelector(".play_count")
      .textContent.split(":")[1]
      .trim();

    const commentsHtml = htmlData.querySelectorAll(".commentItemBox");

    const comments = Array.from(commentsHtml).map((comment) => {
      const username =
        comment.querySelector(".username")?.textContent.trim() || "Unknown";
      const description =
        comment.querySelector(".commentItemDes")?.textContent.trim() || "";
      const date =
        comment.querySelector(".commentItemDate")?.textContent.trim() || "";
      return { username, description, date };
    });

    return Response.json({ subs, plays, comments });
  } catch (err) {
    console.log("Castbox Error");
    return Response.json("Unable to fetch data from CastBox!", { status: 502 });
  }
}
