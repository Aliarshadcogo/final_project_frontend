import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserBlogCard from './components/UserBlogCard'
const UserDashboardScreen = () => {
    const [blogs,setBlogs] = useState([]);
    const [errorMessage,setErrorMessage]= useState("")
    useEffect(()=> {
        const getBlogs = async () => {
            
            const response = await fetch(
              `http://127.0.0.1:4000/blogs`
            );
        
            const result = await response.json();
        
            if (response.ok) {
              setBlogs(result);
              
            } else {
              setErrorMessage(result.message);
            }
          };
        getBlogs()
          
    },[])

    const del = async(id) => {
    //     const response  = await fetch(`http://127.0.0.1:4000/blogs/delete/${id}`,{
    //     method : "DELETE"
    //     // mode: 'cors'
    // })

    const response = axios.delete(`http://127.0.0.1:4000/blogs/delete/${id}`);



    return console.log(response.json());
    } 

    const deleteBlog =(id) => {
        del(id);
    }
  return (
    <div className='container'>
        <h1 className='text-center my-3' >Author's Dashboard</h1>
        <div className="container bg-info p-3 mb-3 d-flex justify-content-between align-items-center shadow-lg p-3 rounded">
        <h3 className='text-light my-3'>Author's Blogs </h3>
        <div>
            <Link to="/createBlog" className='btn btn-dark rounded'>Create Blog</Link>
        </div>
        </div>
       
        {blogs.map(blog => <UserBlogCard blog={blog} deleteBlog={deleteBlog} />)}
    </div>
  )
}

export default UserDashboardScreen