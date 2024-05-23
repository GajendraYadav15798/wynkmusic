import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import  {useUser} from './providers/UserProvider'
function Login() {
//   const {onTokenHandler, onNameHandler}= useUser();
  const [getData, setData] = useState({
      email: '',
      password: '',
      appType: 'music'
  });
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const [getError, setError] = useState(null);
  const onChangeHandler = (event) => {
      setData({ ...getData, [event.target.name]: event.target.value })
  }
  const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log(getData);
      setError(null);
       if (!getData.email) {
          setError('email is mandatory');
          return;
      }
      else if (!getData.password) {
          setError('password cannot be empty');
          return;
      }
      axios.post('https://academics.newtonschool.co/api/v1/user/login',getData, {
          headers: {
              projectID: 'f104bi07c490'
          }
      }).then((result) => {
        //   onTokenHandler(result.data.token);
        //   onNameHandler(result.data.data.name);
        //   console.log(result.data.token);
        //   console.log(result.data.data.name);
        localStorage.setItem('name',result.data.data.user.name);
          localStorage.setItem('token',result.data.token);
          navigate('/');
      }).catch((error) => {
          setError("internal server error please try after sometime");
      })
  }
  return (
    <form onSubmit={onSubmitHandler}>
    <div className='container'>
    {getError && <div div className="alert alert-danger" role="alert">{getError}
    </div>}
    <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="input">
          
            <input type="email"placeholder='Email' value={getData.email} onChange={onChangeHandler} name="email"/>
        </div>
        <div className="input">
           
            <input type="password" placeholder='Password' value={getData.password} onChange={onChangeHandler} name="password"/>
        </div>
    </div>
    <div className="forgot_password">forgot password! <span>Click Here </span></div>
     <div className="submit_container">
        <button className="submit">Login</button>
        <button className="submit" onClick={handleSignUp}>Sign Up</button>
     </div>
    </div>
    </form>
  )
}
export default Login