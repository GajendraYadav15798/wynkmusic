import React, { useState } from 'react';
import { TextField, Button, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

function UpdatePassword() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: ''
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
                name: formData.name,
                email: formData.email,
                passwordCurrent: formData.currentPassword,
                password: formData.newPassword,
                appType: 'music'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    projectId: 'f104bi07c490',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setSnackbarMessage('Password updated successfully.');
            setSnackbarSeverity('success');
            console.log(response.data.data);
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error updating password:', error);
            setSnackbarMessage('Failed to update password. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const formStyle = {
        background: 'gray',
        color: 'black',
        width: '450px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginTop: '130px',
        marginBottom: '50px',
        border: '5px solid',
        animation: 'disco 2s infinite'
    };

    const inputStyle = {
        marginBottom: '15px'
    };

    const buttonStyle = {
        color: 'white',
        backgroundColor: '#1976d2',
        display: 'block',
        width: '100%'
    };

    const snackbarStyle = {
        width: '100%',
        color: 'white'
    };

    return (
        <div>
            <style>
                {`
                    @keyframes disco {
                        0% { border-color: red; }
                        25% { border-color: yellow; }
                        50% { border-color: green; }
                        75% { border-color: blue; }
                        100% { border-color: red; }
                    }
                `}
            </style>
            <form onSubmit={handleSubmit} style={formStyle}>
                <Typography variant="h6" style={{ color: 'black', textAlign: 'center' }}>Update Password</Typography>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={inputStyle} />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={inputStyle} />
                <TextField
                    label="Current Password"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={inputStyle} />
                <TextField
                    label="New Password"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={inputStyle}
                />
                <Button type="submit" variant="contained" style={buttonStyle}>Update Password</Button>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={snackbarStyle}>
                        {snackbarMessage}
                    </MuiAlert>
                </Snackbar>
            </form>
        </div>
    );
}

export default UpdatePassword;
