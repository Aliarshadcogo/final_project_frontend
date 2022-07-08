import React, { useEffect,useState } from 'react'
import {useParams} from "react-router-dom"


const SingleBlogScreen = () => {

    const [blog,setBlog] = useState({});
    const [errorMessage,setErrorMessage] = useState("");
    const params = useParams()
    const id = params.id
useEffect(() => {
    const  getBlog= async(id) => {
        const response = await fetch(
            `http://127.0.0.1:4000/blogs/${id}`
          );
      
          const result = await response.json();
      
          if (response.ok) {
            setBlog(result);
            
          } else {
            setErrorMessage(result.message);
          }
    }
    getBlog(id)
},[])
  return (
    <div className='container'>
        {blog && <div className=''>
            <h1 className='text-center my-3 '>{blog.title}</h1>
            <div className='container'>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
  <img src={blog.image} className="card-img-top card__img" alt={blog.title}/>
  <div className="card-body">
    <h3 className="card-title">By - {blog.user_name}</h3>
    <p className="card-text">{blog.content}</p>
    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
            </div>
            </div>}
    <div></div>
    </div>
  )
}

export default SingleBlogScreen