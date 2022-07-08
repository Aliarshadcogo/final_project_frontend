import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import {useParams} from "react-router-dom"


const EditBlogScreen = () => {
    const [blog,setBlog] = useState({});
    const [errorMessage,setErrorMessage] = useState("");
    const params = useParams()
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [image,setImage] = useState("")
    const [user_name,setUserName] = useState("arshad")
    const [users_id,setUsersId] = useState(3)
    const [id ,setId] = useState(params.id)
    
useEffect(() => {
    const  getBlog= async(id) => {
        const response = await fetch(
            `http://127.0.0.1:4000/blogs/${id}`
          );
      
          const result = await response.json();
      
          if (response.ok) {
            setBlog(result);
            setTitle(result.title)
            setContent(result.content)
            setImage(result.image)
            
          } else {
            setErrorMessage(result.message);
          }
    }
    getBlog(id)
},[])



const editBlog =  async() => {
    const response  = await fetch(`http://127.0.0.1:4000/blogs/edit/${id}`,{
        method : "PUT",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            title : title,
            content : content,
            image : image,
            user_name : user_name,
            users_id : users_id
          })
        
    })

    return console.log(response);
}

const submitHandler = (e) => {
    e.preventDefault();
    editBlog();
}


  return (
    
    <div className='container'>
        
        <h1 className='my-5 text-center'>Edit Blog</h1>
        {blog && <div className='container d-flex justify-content-center'>

<form onSubmit={submitHandler} className='form__container__blog shadow-lg p-3 mb-5 bg-body rounded'>
    <div className="row mb-2 mt-2">
        <div className="col-md-6">
        <label className="form-label">Title of Blog</label> 
        </div>
        <div className='col-md-6'>
        <input type="text" class="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} /> 
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-md-6">
        <label className="form-label">Content of Blog</label> 
        </div>
        <div className='col-md-6'>
        <textarea id="" name="" className='form-control' rows="10" cols="50" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-6">
        <label className="form-label">Upload Image</label> 
        </div>
        <div className='col-md-6'>
        <input type="text" class="form-control" required value={image} onChange={(e) => setImage(e.target.value)}/> 
        {/* <input type="file" id="img" name="img" accept="image/*" required/> */}
        </div>
    </div>
    <div className='text-center'>
    <Button variant='dark' className="rounded" type="submit">Edit</Button>
    </div>
    
</form>
</div>}
        
    </div>
  )
}

export default EditBlogScreen