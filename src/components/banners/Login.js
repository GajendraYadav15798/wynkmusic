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
            localStorage.setItem('name', result.data.data.name);
            localStorage.setItem('token', result.data.token);
            navigate('/');
        }).catch((error) => {
            setError("internal server error please try after sometime");
        });
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginContent}>
                <div style={styles.imageContainer}>
                    <img
                        src="http://localhost:3000/static/media/wynklogo.918bfa463ec67eabd035681b3130204f.svg"
                        alt="Login Image"
                        style={{ position: 'relative', top: '-115px', left: '145px', top: '-90px', height: '60px', width: '60px' }}
                    />
                </div>
                <form style={styles.loginForm} onSubmit={onSubmitHandler}>
                    {getError && <div className="alert alert-danger" role="alert">{getError}</div>}
                    <h2 style={styles.title}>Login/Sign Up</h2>
                    <p style={styles.subTitle}>
                        Get a personalized experience, and access all your music
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
        maxWidth: "600px", // Decreased maxWidth here
    },
    imageContainer: {
        flex: "0 0 40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        marginLeft: "70px",
    },
};

export default Login;
