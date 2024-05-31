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
        src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1663065192/srch_gkdigital_ING501801727.jpg"
        alt="Another Image"
        style={{ position: 'relative', bottom: '55px', right: '-30px', top:'-75px',height: '360px',width: '260px',marginTop:'125px',borderRadius:'12px' }}
    />

          <img
            src="http://localhost:3000/static/media/wynklogo.918bfa463ec67eabd035681b3130204f.svg"
            alt="Sign Up Image"
            style={{ position: 'relative', left: '70px', top: '-115px', height: '60px', width: '60px' }}
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
              style={{ ...styles.input, width: '250px' }} // Increase width here
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
              style={{ ...styles.input, width: '250px' }} // Increase width here
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
              style={{ ...styles.input, width: '250px' }} // Increase width here
              name="password"
            />
          </div>
          <button type="submit" style={{ width: '25%', padding: "10px", position: 'relative', top: '1px', borderRadius: "5px",marginLeft:'35px' }}>
            Sign Up
          </button>
          <button
            type="button"
            style={{ ...styles.button, marginLeft: "10px",width: "25%" }} onClick={handleLogin}
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
    border: '1px solid black',
    borderRadius: '10px',
    marginTop: '30px',
    marginBottom: '320px',
    height: '360px',
    width: '550px',
    position: 'relative',
    left: '470px',
    top: '165px',
    backgroundColor: '#161C25'
  },
  loginContent: {
    display: "flex",
    width: "600px",
    marginLeft: '-15px'
  },
  imageContainer: {
    flex: "0 0 40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    top: '15px',
    left: '-15px',
    borderRadius: '12px',
  },
  loginForm: {
    flex: "0 0 60%",
    marginLeft: "-20px",
    marginTop: '100px',
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    textAlign: "center",
    color: "#F7F5F5",
    marginRight: '105px'
  },
  subTitle: {
    marginBottom: "20px",
    fontSize: "16px",
    textAlign: "center",
    color: "#666",
    marginRight: '105px'
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
    marginLeft: "10px",
  },
};

// Add media queries to make the form responsive
const mediaStyles = `
  @media (max-width: 768px) {
    .loginContainer {
      width: 90%;
      left: auto;
      top: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .loginContent {
      flex-direction: column;
      align-items: center;
    }
    .imageContainer {
      margin-bottom: 20px;
      top: auto;
      left: auto;
    }
    .loginForm {
      margin-left: 0;
      margin-top: 0;
    }
    .title, .subTitle {
      margin-right: 0;
    }
  }
  @media (max-width: 480px) {
    .loginContainer {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .imageContainer img {
      height: 200px;
      width: 150px;
    }
    .loginForm {
      width: 100%;
    }
    .input, .button {
      width: 100%;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaStyles;
document.head.appendChild(styleSheet);

export default SignUp;
