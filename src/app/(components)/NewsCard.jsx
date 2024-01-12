"use client";
import React, { useState, useEffect } from "react";

const NewsCard = ({ article }) => (
  <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
    {/* Card Header */}
    <div className="bg-gray-700 text-white text-center py-2">
      <h2 className="text-lg font-semibold">{article.source.name}</h2>
    </div>

    {/* Card Body */}
    <div className="p-4">
      {/* News Title */}
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>

      {/* News Author */}
      <p className="text-gray-600 mb-4">By {article.author}</p>

      {/* News Description */}
      <p className="text-gray-800 mb-4">{article.description}</p>

      {/* Published Date */}
      <p className="text-gray-500 text-sm">
        Published on: {article.publishedAt}
      </p>

      {/* Read More Link */}
      <a
        href={article.url}
        target="_blank"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Read More
      </a>
    </div>

    {/* Card Footer */}
    <div className="bg-gray-200 text-gray-600 py-2 text-sm text-center">
      <p className="italic">Image Source: {article.source.name}</p>
    </div>
  </div>
);

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "916f66436b7a40628cff34a468490a02";
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`
        );
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-4xl p-4 text-center">News Headlines</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newsData.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsComponent;
