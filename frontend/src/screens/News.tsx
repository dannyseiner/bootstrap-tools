import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function News() {
  const [newsData, setNewsData] = useState<any>([]);
  const navigate = useNavigate();
  const getNewsData = () => {
    axios
      .get(`${"http://localhost:3010/news"}`)
      .then((response) => setNewsData(response.data));
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div>
      {newsData.map((news: any, index: number) => (
        <div
          className="component-container cursor-pointer"
          style={{ marginTop: 35 }}
          onClick={() => navigate(`/news/${news.news_title}`)}
          key={index}
        >
          <div className="news-card-container">
            <div className="news-head">
              <div className="custom-row">
                <div
                  className="custom-col"
                  style={{ alignItems: "flex-start" }}
                >
                  <h3>{news.news_title}</h3>
                </div>
                <div className="custom-col" style={{ alignItems: "flex-end" }}>
                  <p>{news.news_created}</p>
                </div>
              </div>
            </div>
            <p>
              {news.news_content.length > 130
                ? `${news.news_content.slice(1, 130)}...`
                : news.news_content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;