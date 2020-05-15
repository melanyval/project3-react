import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

console.log("hello");

const BLOG_SERVICE = {
  // userData is a placeholder (represents the user's inputs in the signup and login form)
  createBlog(blogData) {
    // const { username, email, password } = req.body; <===> userData
    // console.log('user data in the service: ', userData);
    return service.post("/api/blogPost", blogData);
  },

  getAllBlogs() {
    return service.get("/api/blogPost");
  },

  getSingleBlog() {
    return service.get("/api/singleBlogPost/:id");
  },
};

export default BLOG_SERVICE;
