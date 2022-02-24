export const sortArticlesByLastNameAsc = (articles) => {
  const sortedArticles = articles.sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );

  return sortedArticles;
};

export const sortArticlesByLastNameDesc = (articles) => {
  const sortedArticles = articles.sort(
    (a, b) => -a.surname.localeCompare(b.surname)
  );

  return sortedArticles;
};
