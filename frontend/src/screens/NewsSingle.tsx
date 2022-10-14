import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    axios
      .get(`http://localhost:3010/news/${params.title}`)
      .then((response) => setNewsData(response.data[0]));
  };

  return (
    <div className="component-container">
      <h2>{newsData.news_title}</h2>
      <p>{newsData.news_content}</p>
    </div>
  );
}

export default NewsSingle;
