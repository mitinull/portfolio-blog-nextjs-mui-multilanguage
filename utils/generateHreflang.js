export function generateHreflang(path, lang) {
  if (!["en", "fa"].includes(lang))
    throw new Error("lang " + lang + " is invalid!");

  return {
    alternates: {
      canonical: "/" + (lang === "en" ? "" : "fa/") + path,
      languages: {
        en: "/" + path,
        "fa-IR": "/fa/" + path,
        "x-default": "/" + path,
      },
    },
  };
}
