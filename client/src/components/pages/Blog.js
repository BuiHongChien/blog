import axios from "axios";
import { useEffect, useState } from "react";

import Background from "../utils/Background";

const Blog = () => {
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const href = window.location.href;
    setId(href.split("/").pop());

    const getData = () => {
      return axios
        .get("http://localhost:5000/api/blog", { params: { blogid: id } })
        .then((res) => {
          return res.data;
        });
    };

    getData()
      .then((blog) => {
        setData(blog[0]);
      })
      .catch((err) => console.error(err));

  }, [id]);

  const renderBlog = () => {
    // console.log(`images/${data.img}.jpg`)
    return (
      <div className="blog__wrapper">
        <img src={require(`../../styles/images/${data.img}.jpg`).default} alt ='' className="blog__image"></img>
        <div className="blog__title">{data.title}</div>
        <div className="blog__body">{data.body}</div>
      </div>
    );
  };

  return (
    <div className="blog">
      <div className='blog__bg'>
      <Background /></div>
      {data != null ? renderBlog() : null }
    </div>
  );
};

export default Blog;
