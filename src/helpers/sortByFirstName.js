export const sortArticlesByFirstNameAsc = (articles) => {
  const sortedArticles = articles.sort((a, b) =>
    a.firstname.localeCompare(b.firstname)
  );
  return sortedArticles;
};

export const sortArticlesByFirstNameDesc = (articles) => {
  const sortedArticles = articles.sort(
    (a, b) => -a.firstname.localeCompare(b.firstname)
  );

  return sortedArticles;
};
