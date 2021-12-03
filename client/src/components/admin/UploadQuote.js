import { useState } from "react";
import axios from "axios";

import Background from "../utils/Background";

const UploadQuote = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const onQuoteSubmit = async (e) => {
    e.preventDefault();

    try {
      const newQuote = { content, author };
      console.log("quote" + newQuote.content + newQuote.author);
      await axios.post("http://localhost:5000/api/admin/quote", newQuote);

      setContent("");
      setAuthor("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Background />
      <div className="upload">
        <div className="upload__quote wrapper">
          <div className="form--title">New Quote</div>
          <div className="grid grid--form">
            <label className="upload__label form--title">Content</label>
            <textarea
              className="input__upload input input__textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label className="upload__label form--title">Author</label>
            <input
              type="text"
              className="input__upload input "
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="button button--text button--form"
            onClick={(e) => onQuoteSubmit(e)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadQuote;
