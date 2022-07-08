import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"



const CreateBlogScreen = () => {

const navigate = useNavigate();

const [title,setTitle] = useState("");
const [content,setContent] = useState("")
const [image,setImage] = useState("")
const [user_name,setUserName] = useState("arshad")
const [users_id,setUsersId] = useState(3)



const postDataToDatabase = async( ) => {
    const response  = await fetch(`http://127.0.0.1:4000/blogspost`,{
        method : "POST",
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
    e.preventDefault()
   
    postDataToDatabase()
    navigate("/")
}



  return (
    <div className='container'>
        <h1 className='my-5 text-center'>Create Blog</h1>
        <div className='container d-flex justify-content-center'>
            <form className='form__container shadow-lg p-3 mb-5 bg-body rounded' onSubmit={submitHandler}>
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
                    <textarea id="" name="" className='form-control' rows="4" cols="50" value={content} onChange={(e)=>setContent(e.target.value) }></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <label className="form-label">Upload Image</label> 
                    </div>
                    <div className='col-md-6'>
                    <input type="text" class="form-control" required onChange={(e) => setImage(e.target.value)} value={image} /> 
                   
                    {/* <input type="file" id="img" name="img" accept="image/*" required/> */}
                    </div>
                </div>
                <div className='text-center'>
                <Button variant='dark' className="rounded" type="submit">Create</Button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default CreateBlogScreen