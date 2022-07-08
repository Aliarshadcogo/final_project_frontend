import React from 'react'
import { Button } from 'react-bootstrap'

const LoginScreen = () => {
  return (
    <div className='container'>
        <h1 className='my-5 text-center'>Login</h1>
        <div className='container d-flex justify-content-center'>
            <form className='form__container shadow-lg p-3 mb-5 bg-body rounded'>
                <div className="row mb-2 mt-2">
                    <div className="col-md-6">
                    <label classname="form-label">Email address</label> 
                    </div>
                    <div className='col-md-6'>
                    <input type="email" class="form-control" required /> 
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <label classname="form-label">Password</label> 
                    </div>
                    <div className='col-md-6'>
                    <input type="password" class="form-control" required /> 
                    </div>
                </div>
                <div className='text-center'>
                <Button variant='dark' className='rounded'>Login</Button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default LoginScreen