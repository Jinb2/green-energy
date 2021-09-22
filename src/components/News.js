import React, { useEffect, useState } from "react";
import Article from "./Article";
import Navbar from "./Navbar";

const News = () => {
  const [news, setNews] = useState({});
  const api_key = "f9234e69e30e483ebed9f7909613092a"; // for news api integration

  // fetch data from this url
  async function fetchNewsJSON() {
    // wait for promise
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + api_key
    );
    const json = await response.json();
    setNews(json);
  }

  // controls the number of calls on fetch function
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNewsJSON();
    }, 86400000); // run every day
    return () => clearInterval(interval); // prevent memory leak
  }, []);

  return (
    <div className="news">
      <Navbar />
      <Article news={news} />
    </div>
  );
};
export default News;
