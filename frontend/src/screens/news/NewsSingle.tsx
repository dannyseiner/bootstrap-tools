import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../controllers/api";
import Formatter from "../../controllers/formatter";
const local_data = require("../../data/news.json");
function NewsSingle() {
  const [newsData, setNewsData] = useState<any>({
    news_title: "",
  });
  const params = useParams();
  useEffect(() => {
    loadNewsData();
    console.log(newsData);
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
