import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"

import { Button, Form, Message } from 'semantic-ui-react'
import { loginUser } from '../actions/users'
import { editState } from '../actions/appState'

function Login (props) {  

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const UI = useSelector(state=>state.UI) 

  useEffect(()=>{
    localStorage.removeItem("state")
    dispatch(editState('Admin panel', 'activeItem'))
  },[]) 

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    
    dispatch(loginUser(userData, props.history))
    
  };
  const handleChange = (event) => {
    if(event.target.name === 'email') setEmail(event.target.value)
    if(event.target.name === 'password') setPassword(event.target.value)    
  };

  const handleCredentialError =() =>{
    if(UI.errors) 
     return <Message
     error
     header='Wrong Credentials'
     content='Wrong email or password please try again'
   />
  }         
    
    return (
      <div>        
        <div className='login'>
          <Form error onSubmit={handleSubmit} >
            <Form.Input
              id="email"
              name="email"
              type="email"
              label="Email"              
              fluid
              value={email}
              onChange={handleChange}
            />
            <Form.Input
              id="password"
              name="password"
              type="password"
              label="Password"              
              fluid
              value={password}
              onChange={handleChange}
            />
            {handleCredentialError()}
            <Button
              type="submit"              
            >
              Login
        </Button>
          </Form>
        </div>
      </div>

    ) 
}

export default Login