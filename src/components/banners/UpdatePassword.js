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

    const commonTextStyle = {
        color: '#80848A' // Updated text color
    };

    const placeholderStyle = {
        color: '#1C1C1B' // Placeholder text color
    };

    return (
        <div style={{ marginTop: '175px' }}>
            <form 
                onSubmit={handleSubmit} 
                style={{
                    background: '#030404',
                    color: '#80848A', // Updated text color
                    width: '450px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '5px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    marginTop: '130px',
                    marginBottom: '50px',
                    animation: 'disco 2s infinite'
                }}
            >
                <Typography variant="h6" style={{ textAlign: 'center', fontWeight: '500', ...commonTextStyle }}>
                    Update Password
                </Typography>
                <TextField
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={{ ...commonTextStyle, border: 'none' }} 
                    InputLabelProps={{ style: { display: 'none' } }} // Hide label
                    InputProps={{ style: { ...commonTextStyle, '::placeholder': placeholderStyle } }} // Updated input text color and placeholder color
                />
                <TextField
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={{ ...commonTextStyle, border: 'none' }} 
                    InputLabelProps={{ style: { display: 'none' } }} // Hide label
                    InputProps={{ style: { ...commonTextStyle, '::placeholder': placeholderStyle } }} // Updated input text color and placeholder color
                />
                <TextField
                    name="currentPassword"
                    placeholder="Current Password"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={{ ...commonTextStyle, border: 'none' }} 
                    InputLabelProps={{ style: { display: 'none' } }} // Hide label
                    InputProps={{ style: { ...commonTextStyle, '::placeholder': placeholderStyle } }} // Updated input text color and placeholder color
                />
                <TextField
                    name="newPassword"
                    placeholder="New Password"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    style={{ ...commonTextStyle, border: 'none' }}
                    InputLabelProps={{ style: { display: 'none' } }} // Hide label
                    InputProps={{ style: { ...commonTextStyle, '::placeholder': placeholderStyle } }} // Updated input text color and placeholder color
                />
                <Button type="submit" variant="contained" style={{ ...commonTextStyle, color: '#0C0F12', backgroundColor: '#EEEEEE', display: 'block', width: '195px', borderRadius: '45px', marginLeft: '135px' }}>
                    Update Password
                </Button>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ ...commonTextStyle, width: '100%' }}>
                        {snackbarMessage}
                    </MuiAlert>
                </Snackbar>
            </form>
        </div>
    );
}

export default UpdatePassword;
