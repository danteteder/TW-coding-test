export const sortArticlesByDateAsc = (articles) => {
  const sortedArticles = articles.sort(function (a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  return sortedArticles;
};

export const sortArticlesByDateDesc = (articles) => {
  const sortedArticles = articles.sort(function (a, b) {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return sortedArticles;
};
