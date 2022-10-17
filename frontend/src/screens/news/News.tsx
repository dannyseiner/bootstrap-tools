import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../controllers/api";
import formatter from "../../controllers/formatter";
import { INews } from "../../interfaces/api/INews";
const local_data = require("../../data/news.json");
function News() {
  const [newsData, setNewsData] = useState<INews[]>([]);
  const navigate = useNavigate();

  const getNewsData = () => {
    API.get(
      "news",
      (response: any) => setNewsData(response.data),
      () => setNewsData(local_data)
    );
  };

  useEffect(() => {
    getNewsData();
    formatter.encode("2015-03-25T12:00:00Z");
  }, []);

  return (
    <div>
      {newsData.map((news: INews, index: number) => (
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
                  <p>{formatter.encode(news.news_created).split(" ")[0]}</p>
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
