import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
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

    axios.post('https://academics.newtonschool.co/api/v1/user/signup', getData, {
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
    <div style={styles.loginContainer}>
      <div style={styles.loginContent}>
        <div style={styles.imageContainer}>
          <img
            src="http://localhost:3000/static/media/wynklogo.918bfa463ec67eabd035681b3130204f.svg"
            alt="Sign Up Image"
            style={{ position: 'relative', left: '100px', top: '-140px', height: '60px', width: '60px' }}
          />
        </div>
        <form style={styles.loginForm} onSubmit={onSubmitHandler}>
          {getError && (
            <div className="alert alert-danger" role="alert">
              {getError}
            </div>
          )}
          <h2 style={styles.title}>Sign Up</h2>
          <p style={styles.subTitle}>
            Create an account to get started
          </p>

          <div style={styles.formGroup}>
            <input
              type="text"
              value={getData.name}
              onChange={onChangeHandler}
              required
              placeholder="UserName"
              style={styles.input}
              name="name"
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              value={getData.email}
              onChange={onChangeHandler}
              required
              placeholder="Email"
              style={styles.input}
              name="email"
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              value={getData.password}
              onChange={onChangeHandler}
              required
              placeholder="Password"
              style={styles.input}
              name="password"
            />
          </div>
          <button type="submit" style={{ width: '40%', padding: "10px", position: 'relative', top: '1px', borderRadius: "5px" }}>
            Sign Up
          </button>
          <button
            type="button"
            style={{ ...styles.button, marginLeft: "10px" }} onClick={handleLogin}
          >
            Login
          </button>
          <br /> {/* Add a line break here */}
        </form>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginContent: {
    display: "flex",
    maxWidth: "600px",
  },
  imageContainer: {
    flex: "0 0 40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    top: '20px'
  },
  loginForm: {
    flex: "0 0 60%",
    marginLeft: "20px",
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    textAlign: "center",
    color: "#F7F5F5",
  },
  subTitle: {
    marginBottom: "20px",
    fontSize: "16px",
    textAlign: "center",
    color: "#666",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    borderRadius: "4px",
    backgroundColor: "#1B1B1C",
    border: "none",
    outline: "none",
    color: "#fff", // Change input text color to white
  },
  button: {
    width: "30%",
    padding: "10px",
    backgroundColor: "#F6F6F6",
    color: "#0C0F12",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "70px",
  },
};

export default SignUp;
