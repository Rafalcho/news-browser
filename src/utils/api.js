export const getNews = (articleType) => {
  const serviceType = articleType.replace('/article', '');
  const query = `{articles(t: [Article], service: [${serviceType}], limit:50) {id url title body{data}img{url}}}`;

  const url = `https://mobileapi.wp.pl/v1/graphql?query=${query}`;

  const fetchNews = fetch(url);

  return fetchNews.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching news failed');
    }
  })
  .then(response => {
    return response.data.articles;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });
};

export const getArticle = (articleUrl) => {
  const query = `{article(url:"${articleUrl}") {body {data},title,img {url},}}`;
  const url = `https://mobileapi.wp.pl/v1/graphql?query=${query}`;

  const fetchArticle = fetch(url);
  return fetchArticle.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Fetching article failed');
    }
  })
  .then(response => {
    return response.data.article;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });
};
