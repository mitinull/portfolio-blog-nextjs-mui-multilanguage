export function generateHreflangAndOg(path, lang, type = "article") {
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
    },
  };
}
