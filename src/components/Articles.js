import React, { useEffect, useState } from "react";
import Article from "./Article";

const Articles = (props) => {
  var news = props.news["articles"];

  const [articles, SetArticles] = useState([]);

  // temperature levels
  useEffect(() => {
    if (news != null) {
      console.log("Data exists!");
      var articles = [];
      for (let i = 0; i < news.length; i++) {
        let article = {
          title: news[i]["title"],
          desc: news[i]["description"],
          url: news[i]["url"],
          urlToImage: news[i]["urlToImage"],
          date: news[i]["publishedAt"].substring(0, 10),
        };
        articles.push(article);
      }
      SetArticles(articles);
    } else {
      console.log("Data not fetched!");
    }
  }, [news]);

  console.log(articles);

  return (
    <div>
      <h1>Latest News</h1>
      {articles.map((article) => (
        <Article
          title={article.title}
          desc={article.desc}
          url={article.url}
          urlToImage={article.urlToImage}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default Articles;
