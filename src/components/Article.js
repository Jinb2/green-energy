import React from "react";
import "../styles/article.css";

const Article = (props) => {
  return (
    <div className="articles">
      <figure class="news_hor">
        <img src={props.urlToImage} alt="urlImage" />
        <figcaption>
          <h3>{props.title} </h3>
          <p>{props.desc}</p>
          <footer>
            <div class="hor_date">{props.date}</div>
          </footer>
        </figcaption>
        <a href={props.url}></a>
      </figure>
    </div>
  );
};

export default Article;
