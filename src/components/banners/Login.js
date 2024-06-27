import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        setData({ ...getData, [event.target.name]: event.target.value });
        setError(null); // Clear the error message when the user starts typing
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(getData);
        setError(null);
        if (!getData.email) {
            setError('email is mandatory');
            return;
        } else if (!getData.password) {
            setError('password cannot be empty');
            return;
        }
        axios.post('https://academics.newtonschool.co/api/v1/user/login', getData, {
            headers: {
                projectID: 'f104bi07c490'
            }
        }).then((result) => {
            localStorage.setItem('name', result.data.data.user.name);
            console.log(result.data.data.user.name);
            localStorage.setItem('token', result.data.token);
            navigate('/');
        }).catch((error) => {
            setError("internal server error please try after sometime");
        });
    };

    return (
        <div style={styles.loginContainer} className="loginContainer">
            <div style={styles.loginContent} className="loginContent">
                <div style={styles.imageContainer} className="imageContainer">
                    <img
                        src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1663065192/srch_gkdigital_ING501801727.jpg"
                        alt="Another Image"
                        style={styles.mainImage}
                    />
                    <img
                        src="http://localhost:3000/static/media/wynklogo.918bfa463ec67eabd035681b3130204f.svg"
                        alt="Login Image"
                        style={styles.logoImage}
                    />
                </div>
                <form style={styles.loginForm} onSubmit={onSubmitHandler} className="loginForm">
                    {getError && <div className="alert alert-danger" role="alert">{getError}</div>}
                    <h2 style={styles.title}>Login/Sign Up</h2>
                    <p style={styles.subTitle}>
                        Get a personalized experience, and access <br />all your music
                    </p>
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
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                    <button
                        type="button"
                        style={{ ...styles.button, marginLeft: "10px" }} onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
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
        height: "400px",
        width: "600px",
        border: "1px solid black",
        marginTop: "220px",
        marginBottom: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "12px",
        backgroundColor: "#161C25",
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
        position: "relative",
        right: "110px",
        top: "-75px",
    },
    mainImage: {
        position: "relative",
        top: "12px",
        left:'75px',
        height: "400px",
        width: "220px",
        marginTop: "125px",
        borderRadius: "12px",
       
    },
    logoImage: {
        position: "relative",
        top: "-50px",
        left: "85px",
        height: "60px",
        width: "60px",
    },
    loginForm: {
        flex: "0 0 60%",
        marginLeft: "-12px",
        marginTop: "100px",
    },
    title: {
        marginBottom: "10px",
        fontSize: "24px",
        textAlign: "center",
        color: "#F7F5F5",
        marginLeft: "-190px",
    },
    subTitle: {
        marginBottom: "20px",
        fontSize: "16px",
        textAlign: "center",
        color: "#666",
        marginLeft: "-185px",
        wordWrap: "break-word",
    },
    formGroup: {
        marginBottom: "15px",
        marginLeft: "-75px",
        width: "338px",
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
        color: "#fff",
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
        marginLeft: "-35px",
        margin: "15px",
    },
};

// Add media queries to make the form responsive
const mediaStyles = `
  @media (max-width: 1024px) {
    .loginContainer {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .loginContent {
      flex-direction: column;
      align-items: center;
    }
    .imageContainer {
      margin-bottom: 20px;
    }
    .loginForm {
      margin-left: 0;
      margin-top: 20px;
    }
    .title, .subTitle {
      margin-left: 0;
    }
    .formGroup {
      margin-left: 0;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .loginContainer {
      width: 90%;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .loginContent {
      flex-direction: column;
      align-items: center;
    }
    .imageContainer {
      margin-bottom: 20px;
    }
    .loginForm {
      margin-left: 0;
      margin-top: 20px;
    }
    .title, .subTitle {
      margin-left: 0;
    }
    .formGroup {
      margin-left: 0;
      width: 100%;
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
    .title, .subTitle {
      margin-left: 0;
      text-align: center;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaStyles;
document.head.appendChild(styleSheet);

export default Login;
