import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./News.css";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = "7a674400334e42a09d28f94043267b98";

  const [newsList, setnewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryInputRef = useRef(null);

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-02-12&sortBy=publishedAt&apiKey=${apiKey}`;

    async function fetchData() {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setnewsList(jsonData.articles);
    }
    fetchData();
  }, [query]);

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }
  function handleClick(topic) {
    const queryValue = topic;
    setQuery(queryValue);
  }

  return (
    <div className="news-app">
      <div className="header">
        <img
          className="logo"
          src="https://png.pngitem.com/pimgs/s/507-5078900_letter-q-png-image-with-transparent-background-transparent.png"
          alt=""
        />
        <h1 className="logo-name">Daily News</h1>
      </div>
      <form className="news-search" onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input className="btn-submit" type="submit" value="Search" />
      </form>

      <div className="btn-listone">
        <button
          className="btn-news"
          onClick={() => {
            handleClick("india");
          }}
        >
          India
        </button>
        <button
          className="btn-news"
          onClick={() => {
            handleClick("netflix");
          }}
        >
          Netflix
        </button>
        <button
          className="btn-news"
          onClick={() => {
            handleClick("modi");
          }}
        >
          Modi
        </button>
        <button
          className="btn-news"
          onClick={() => {
            handleClick("ukraine");
          }}
        >
          Ukraine
        </button>
        <button
          className="btn-news btn-disapr"
          onClick={() => {
            handleClick("covid");
          }}
        >
          Covid
        </button>
        <button
          className="btn-news"
          onClick={() => {
            handleClick("cricket");
          }}
        >
          Cricket
        </button>
        <button
          className=" btn-news btn-disapr"
          onClick={() => {
            handleClick("football");
          }}
        >
          Football
        </button>
        <button
          className=" btn-news btn-disapr"
          onClick={() => {
            handleClick("politics");
          }}
        >
          Politics
        </button>
        <button
          className="btn-news btn-disapr"
          onClick={() => {
            handleClick("weather");
          }}
        >
          Weather
        </button>
      </div>
      <div className="news-list">
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
