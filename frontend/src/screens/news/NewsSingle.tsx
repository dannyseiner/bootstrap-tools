import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../controllers/api";
import Formatter from "../../controllers/formatter";
import { INews } from "../../interfaces/api/INews";
const local_data = require("../../data/news.json");
function NewsSingle() {
  const params = useParams();
  const [newsData, setNewsData] = useState<INews>({
    news_id: "",
    news_title: "",
    news_content: "",
    news_created: "",
  });

  useEffect(() => {
    loadNewsData();
  }, []);

  const loadNewsData = () => {
    API.get(
      `news/${params.title}`,
      (response: any) => setNewsData(response.data[0]),
      () => setNewsData(local_data[0])
    );
  };

  return (
    <div className="component-container">
      <h2>{newsData.news_title}</h2>
      <p>{Formatter.encode(newsData.news_created)}</p>
      <p>{newsData.news_content}</p>
    </div>
  );
}

export default NewsSingle;
