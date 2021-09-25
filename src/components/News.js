import React, { useEffect, useState } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";

const News = () => {
  const [news, setNews] = useState({});
  const api_key = "f9234e69e30e483ebed9f7909613092a"; // for news api integration

  // fetch data from this url
  async function fetchNewsJSON() {
    // wait for promise
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?category=science&q=climate+change&apiKey=" +
        api_key
    );
    const json = await response.json();
    setNews(json);
    console.log(news);
  }

  // controls the number of calls on fetch function
  useEffect(() => {
    fetchNewsJSON();
  }, []);

  return (
    <div className="news">
      <Navbar />
      <Articles news={news} />
    </div>
  );
};
export default News;
