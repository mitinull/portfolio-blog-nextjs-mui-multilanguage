import parse from "node-html-parser";

export async function GET() {
  try {
    const res = await fetch(
      "https://castbox.fm/channel/EMA-English-%7C-English-Music-%7C-%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A8%D8%A7-%D8%AA%D8%B1%D8%A7%D9%86%D9%87-id5058728?country=en"
    );

    const data = await res.text();

    const htmlData = parse(data);

    const subs = htmlData
      .querySelector(".sub_count")
      .textContent.split(":")[1]
      .trim();

    const plays = htmlData
      .querySelector(".play_count")
      .textContent.split(":")[1]
      .trim();

    return Response.json({ subs, plays });
  } catch (err) {
    console.log("Castbox Error");
    return Response.json("Unable to fetch data from CastBox!", { status: 502 });
  }
}
