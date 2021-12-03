import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../utils/Layout";
import Menu from "../utils/Menu";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getData = () => {
      return axios.get("http://localhost:5000/api/quotes").then((res) => {
        return res.data;
        
      });
    };

    getData()
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  const renderedQuotes = () =>
    quotes.map((q) => {
      return (
        <div className="quotes__item">
          <div className="quotes__text">{q.content}</div>
          <div className="quotes__note">{q.author}</div>
        </div>
      );
    });

  return (
    <Layout>
      <div className="quotes">{renderedQuotes()}</div>
    </Layout>
  );
};

export default Quotes;
