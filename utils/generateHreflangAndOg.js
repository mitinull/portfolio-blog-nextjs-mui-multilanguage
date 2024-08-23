export function generateHreflangAndOg(
  path,
  lang,
  type = "article",
  imgUrl,
  imgAlt,
  imgWidth = 1280,
  imgHeight = 720
) {
  if (!["en", "fa"].includes(lang))
    throw new Error("lang " + lang + " is invalid!");

  const url = "/" + (lang === "en" ? "" : "fa/") + path;

  return {
    alternates: {
      canonical: url,
      languages: {
        en: "/" + path,
        "fa-IR": "/fa/" + path,
        "x-default": "/" + path,
      },
    },

    openGraph: {
      siteName: "Mitinull",
      url: url,
      locale: lang === "en" ? "en" : "fa-IR",
      type: type,
      ...(imgUrl && {
        images: [
          {
            url: imgUrl,
            width: imgWidth,
            height: imgHeight,
            ...(imgAlt && { alt: imgAlt }),
          },
        ],
      }),
    },
  };
}
