import React from "react";
import "./Blogs.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  const [title, setTitle] = React.useState([]);
  const [body, setBody] = React.useState([]);
  const [pictureUrl, setPictureUrl] = React.useState([]);
  const [author, setAuthor] = React.useState([]);

  React.useEffect(() => {
    console.log("title: ", title);
    console.log("body: ", body);
    console.log("pictureUrl: ", pictureUrl);
    console.log("author: ", author);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(baseURL + "/api/blogPost", { title, body, pictureUrl, author })
      .then((blogData) => {
        console.log(blogData);
        window.location = "/";
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="CreateBlog">
      <h4>
        <span>
          <Link to="/">Click here</Link>
        </span>{" "}
        to return to the blogs page
      </h4>

      <h1>Use the form below to create your own blog post</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Body:
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <label>
          Picture:
          <input
            type="text"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateBlog;