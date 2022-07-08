import React,{useState,useEffect} from 'react'
import BlogCard from './components/BlogCard'

const ListBlogScreen = () => {
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

  return (
    <div className='container' >
        <h1 className='text-center my-4' >Blogs List</h1>
        {blogs && blogs.map(blog => <BlogCard blog={blog} />)}
    </div>
  )
}

export default ListBlogScreen