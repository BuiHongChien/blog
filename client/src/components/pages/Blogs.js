import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../utils/Layout";
import Menu from "../utils/Menu";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = () => {
      return axios.get("http://localhost:5000/api/blogs").then((res) => {
        return res.data;
      });
    };

    getData()
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const renderedBlogs = () =>
    blogs.map((b) => {
      return (
        <Link to={`/more/blogs/${b._id}`}
          target="__blank"
          className='blogs__link'
        >
          <div className="blogs__item">
            <div
              className="blogs__image"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff40, #ffffff10), url(/images/${b.img}.jpg)`,
              }}
            />
            <div className="blogs__title">{b.title}</div>
          </div>
        </Link>
      );
    });

  return (
    <Layout>
        <div className="blogs">
          <div className="grid grid--blogs">{renderedBlogs()}</div>
      </div>
    </Layout>
  );
};

export default Blogs;
