import { useState } from "react";
import axios from "axios";

import Background from "../utils/Background";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onBlogSubmit = async (e) => {
    e.preventDefault();

    try {
      const newBlog = { title, body };
      await axios.post("http://localhost:5000/api/admin/blog", newBlog);

      setTitle("");
      setBody("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Background />
      <form className="upload" onSubmit={onBlogSubmit}>
        <div className="upload__blog wrapper">
          <div className="form--title">New Blog</div>
          <div className="grid grid--form">
            <label className="upload__label form--title">Title</label>
            <input
              type="text"
              className="input__upload input "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="upload__label form--title">Context</label>
            <textarea
              className="input__upload input input__textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button className="button button--text button--form" type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default UploadBlog;
