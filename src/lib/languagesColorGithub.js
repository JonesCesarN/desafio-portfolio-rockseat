const colorPalette = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  SCSS: "#c6538c",
  EJS: "#a91e50",
  HTML: "#e34c26",
  JSON: "#292929",
  PHP: "#4F5D95",
  CSS: "#563d7c",
};

export const LangColorGithub = (lang) => {
  if (colorPalette[lang]) return colorPalette[lang];
};
