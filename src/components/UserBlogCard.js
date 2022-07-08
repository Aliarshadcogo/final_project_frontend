import React from 'react'
import {Link} from "react-router-dom"

const UserBlogCard = ({blog,deleteBlog}) => {
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
            <div className='d-flex justify-content-between align-items-center mb-2'>
            <h3 className="card-title">{blog.title}</h3>
            <button className='btn btn-danger rounded' onClick={() => deleteBlog(blog.id)}><i class="fa-regular fa-trash-can"></i></button>
            </div>
          
          <p className="card-text">{blog.content.slice(0, 240)}...</p>
          <div className='d-sm-flex justify-content-start align-items-center'>
          <Link to={`/blog/${blog.id}`} className='btn btn-sm  btn-warning rounded-pill'>Read More</Link>
          <Link to={`/blog/edit/${blog.id}`} className="btn btn-sm btn-info ms-3 rounded-pill"clas>Edit Blog</Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default UserBlogCard