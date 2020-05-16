import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

import axios from "axios";

const SingleBlog = () => {
  let blogId = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  if (blogId[blogId.length - 1] == "?") {
    blogId = blogId.substring(0, blogId.length - 1);
  }

  console.log(blogId);

  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  const [blog, setBlog] = React.useState([]);
  const [allComments, setAllComments] = React.useState([]);

  React.useEffect(() => {
    service
      .get(`/api/singleBlogPost/${blogId}`)
      .then((blog) => {
        console.log(blog);
        setBlog(blog.data.blogs);
        setAllComments(blog.data.comments);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function getAllComments() {
    console.log(allComments);
    return allComments.map((comment, i) => (
      <div>
        <strong>{comment.author} says:</strong>
        <p>{comment.comment}</p>
      </div>
    ));
  }

  const [comment, setComment] = React.useState([]);

  function handleSubmit(e) {
    service
      .post(`/api/comment`, {
        comment: comment,
        blog: blogId,
      })
      .then((comment) => {
        console.log(comment);
      })
      .catch((err) => {
        throw err;
      });
  }

  function getBlog() {
    console.log(blog);
    return (
      <div className="single-blog-page">
        <div className="author-image">
          <img src="https://media.istockphoto.com/photos/fitness-woman-working-out-on-yoga-mat-picture-id863580848?k=6&m=863580848&s=612x612&w=0&h=K5TiwcZGhoA-H2X8cyG_671JAnVj1lAxGc-0MWQKdTo=" />
          <h4>
            Published on {blog.createdAt} by {blog.author}
          </h4>
        </div>

        <div className="small-margin">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="SingleBlog">
      <h4>
        <span>
          <Link to="/">Click here</Link>
        </span>{" "}
        to return to the blogs page
      </h4>
      {getBlog()}

      <hr />

      <div className="all-comments small-margin">
        <h2>Comments</h2>

        {getAllComments()}

        <h3>Join the discussion:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Comment:
            <textarea
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>

          <button type="hidden">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;
