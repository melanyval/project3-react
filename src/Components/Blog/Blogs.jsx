import React from "react";
import "./Blogs.css";
//import "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    service
      .get("/api/blogPost")
      .then((blogs) => {
        console.log(blogs);
        setBlogs(blogs.data.blogs);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  function getAllBlogs() {
    console.log(blogs);
    return blogs.map((blog) => (
      <div className="blog-card">
        <Link
          to={{
            pathname: `/blogs/${blog._id}`,
          }}
        >
          <li key={blog._id}>{blog.title}</li>
        </Link>
        <img src={blog.pictureUrl} />
      </div>
    ));
  }

  return (
    <div className="Blogs">
      <h1 class="welcome">Welcome to More about Mel</h1>
      <ul className="all-blogs">{getAllBlogs()}</ul>
    </div>
  );
};

export default Blogs;
