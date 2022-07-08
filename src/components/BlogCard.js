import React from "react";
import {Link} from "react-router-dom"

const BlogCard = ({ blog }) => {
  return (
    <div className="container row__container mb-4 d-flex justify-content-center">
      <div
        className="card bg-dark text-white my-3 card__container shadow-lg mb-5 rounded"
        style={{ width: "80%" }}
      >
        <img
          src={blog.image}
          className="card-img card__image"
          alt={blog.title}
        />
        
        <div className="card-img-overlay">
          <h3 className="card-title">{blog.title}</h3>
          <p className="card-text">{blog.content.slice(0, 240)}... <Link to={`/blog/${blog.id}`} className="text-info">
         Read More
        </Link></p>
          <p className="card-text">-{blog.user_name}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
