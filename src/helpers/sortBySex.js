export const sortArticlesBySexMale = (articles) => {
  const sortedArticles = articles.sort(function (a, b) {
    if (a.sex === "m") {
      return -1;
    }
    if (b.firstname === "f") {
      return 1;
    }
    return 0;
  });

  return sortedArticles;
};

export const sortArticlesBySexFemale = (articles) => {
  const sortedArticles = articles.sort(function (a, b) {
    if (a.sex === "f") {
      return -1;
    }
    if (b.firstname === "m") {
      return 1;
    }
    return 0;
  });
  return sortedArticles;
};
