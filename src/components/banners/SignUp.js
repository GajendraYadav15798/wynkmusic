import React from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function SignUp() {
  const [getData, setData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "music",
  });
  const [getError, setError] = useState(null);
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value });
  };
  console.log(getData);
  const handleLogin = () => {
    navigate('/login');
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(getData);
    setError(null);
    if (!getData.name) {
      setError("userName is mandatory");
      return;
    } else if (!getData.email) {
      setError("email is mandatory");
      return;
    } else if (!getData.password) {
      setError("password cannot be empty");
      return;
    }

    axios.post('https://academics.newtonschool.co/api/v1/user/signup',getData, {
            headers: {
                projectID: 'f104bi07c490'
            }
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        setError("internal server error please try after sometime");
      });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="container">
        {getError && (
          <div div className="alert alert-danger" role="alert">
            {getError}
          </div>
        )}
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
           
            <input
              type="text"
              placeholder="User Name "
              value={getData.name}
              onChange={onChangeHandler}
              name="name"
            />
          </div>
          <div className="input">
          
            <input
              type="email"
              placeholder="Email"
              value={getData.email}
              onChange={onChangeHandler}
              name="email"
            />
          </div>
          <div className="input">
           
            <input
              type="password"
              placeholder="Password"
              value={getData.password}
              onChange={onChangeHandler}
              name="password"
            />
          </div>
        </div>
        <div className="submit_container">
          <button className="submit">Sign Up</button>
          <button className="submit-1" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default SignUp;
