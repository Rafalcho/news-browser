export const getNews = () => {
  const query = `{articles(t: [Article], service: [Wiadomosci], limit:50) {id title body{data}img{url}}}`;

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
    console.log(response.data.articles);
    return response.data.articles;

  })
  .catch(error => {
    console.log('Fetching data error:', error);
  });
};
