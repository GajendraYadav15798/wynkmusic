import React, { useState } from 'react';
import './ManageSubscriptions.css'; // Import the CSS file

const ManageSubscriptions = () => {
  const [currentPlan, setCurrentPlan] = useState('Yearly');

  const handlePlanChange = (plan) => {
    setCurrentPlan(plan);
  };

  return (
    <div className="manage-subscriptions-container">
      <div className="premium-header">
        <img className="crown-logo" src="https://image.similarpng.com/very-thumbnail/2020/08/kings-crown-logo-vector-PNG.png" alt="Crown Logo" />
        <h1 style={{ color: 'red' }}>Go Premium</h1>
      </div>
      <div className="manage-subscriptions-content">
        <h2 className="manage-subscriptions-header">Manage Subscriptions</h2>
        <div className="manage-subscriptions-options">
          <div className="subscription-option" onClick={() => handlePlanChange('Yearly')}>
            <h3>Yearly</h3>
            <p>
              <span className="original-price">₹999</span>
              ₹399
            </p>
            <p>Save 60%</p>
            <div className="tick-mark">&#10004;</div>
          </div>
          <div className="subscription-option" onClick={() => handlePlanChange('3 Months')}>
            <h3>3 Months</h3>
            <p>
              <span className="original-price">₹289</span>
              ₹129
            </p>
            <p>Save 55%</p>
            <div className="tick-mark">&#10004;</div>
          </div>
          <div className="subscription-option" onClick={() => handlePlanChange('Monthly')}>
            <h3>Monthly</h3>
            <p>
              <span className="original-price">₹99</span>
              ₹49
            </p>
            <p>Save 50%</p>
            <div className="tick-mark">&#10004;</div>
          </div>
        </div>
        <div className="manage-subscriptions-details">
          <p>
            <strong>Current Plan:</strong> {currentPlan}
          </p>
          <table className="benefits-table">
            <thead>
              <tr>
                <th>Benefits</th>
                <th>Now</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unlimited Streaming</td>
                <td><div className="tick-mark">&#10004;</div></td>
                <td><div className="tick-mark">&#10004;</div></td>
              </tr>
              <tr>
                <td>Unlimited Downloads</td>
                <td><div className="tick-mark">&#10004;</div></td>
                <td><div className="tick-mark">&#10004;</div></td>
              </tr>
              <tr>
                <td>Ad-free Music</td>
                <td><div className="tick-mark">&#10004;</div></td>
                <td><div className="tick-mark">&#10004;</div></td>
              </tr>
            </tbody>
          </table>
          <div className="payment-info-box">
            <p>
              <strong>Amount to be paid:</strong> ₹399
            </p>
            <button className="manage-subscriptions-continue">Continue</button>
          </div>
          <div className="additional-info">
            <p>All amounts are inclusive of 18% GST</p>
            <p>By clicking on Continue button, you agree to Wynk’s Terms of service and Privacy policy.</p>
            <p>Get Yearly plan at ₹399. An auto-renewal plan, cancel anytime on app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscriptions;
