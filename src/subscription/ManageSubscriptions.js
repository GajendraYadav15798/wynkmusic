import React from 'react';
import './ManageSubscriptions.css'; 
import wynklogo from "../assets/wynklogo.svg";

const ManageSubscriptions = () => {
    return (
        <div className="subscription-container">
            <div className="logo-container">
            <img src={wynklogo} alt="logo" />
            </div>
            <div className="subscription-content">
                <h2>Manage Your Subscriptions</h2>
                <div className="subscription-options">
                    <div className="subscription-option">
                        <h3>Weekly</h3>
                        <p>$5.99/week</p>
                        <button>Subscribe</button>
                    </div>
                    <div className="subscription-option">
                        <h3>Monthly</h3>
                        <p>$19.99/month</p>
                        <button>Subscribe</button>
                    </div>
                    <div className="subscription-option">
                        <h3>Yearly</h3>
                        <p>$99.99/year</p>
                        <button>Subscribe</button>
                    </div>
                </div>
                <p className="premium-info">As a premium customer, you get access to exclusive features and content!</p>
            </div>
        </div>
    );
};

export default ManageSubscriptions;
