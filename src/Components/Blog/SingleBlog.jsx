import React from "react";
import "./Blogs.css";

import axios from "axios";

const SingleBlog = () => {
  let blogId = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  const [blog, setBlog] = React.useState([]);
  React.useEffect(() => {
    service
      .get(`/api/singleBlogPost/${blogId}`)
      .then((blog) => {
        console.log(blog);
        setBlog(blog.data.blogs);
        //setComment(blog.data.comments);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function getBlog() {
    console.log(blog.title);
    return (
      <div className="blog-card">
        <img src="https://media.istockphoto.com/photos/fitness-woman-working-out-on-yoga-mat-picture-id863580848?k=6&m=863580848&s=612x612&w=0&h=K5TiwcZGhoA-H2X8cyG_671JAnVj1lAxGc-0MWQKdTo=" />
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    );
  }

  return <div className="SingleBlog">{getBlog()}</div>;
};

export default SingleBlog;
