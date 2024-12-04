import React, { useState } from 'react';
import { AuthStyles } from '../../styles/AuthStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreement: false
  });

  const socialIcons = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/24ced0b02863b36f16279f7c499953ce7e44c3f92e95aee4fcbdcea76766236c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', alt: 'Facebook' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a7db5e3d7b2d6526597ed89ea0b0f4c94e189b4f7faff2d03070a8a1f31b48ed?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', alt: 'Google' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/895f250544b1ba19c6203b39db8094a44bb0b68144d39ece651cf95ce10a84cd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', alt: 'Apple' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // Extract email and password from formData
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get user details from the response
      console.log("Account Created Successfully!", user);
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <AuthStyles />
        <div className="auth-container">
          <div className="header-wrapper">
            <h1>Sign up</h1>
            <button 
              className="close-icon"
              aria-label="Close signup form"
              onClick={() => {}}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/830b8d1828f732aad5cc1707f6ef527de829577e995be70bd1351d474bdf6b82?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                alt=""
              />
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                aria-required="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                aria-required="true"
              />
            </div>

            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="agreement"
                className="checkbox"
                checked={formData.agreement}
                onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                aria-required="true"
              />
              <label htmlFor="agreement">
                I agree to the <button className="link-button">User Agreement</button> &
                confirm I am at least 18 years old
              </label>
            </div>

            <button 
              type="submit" 
              className="signup-button"
              aria-label="Create account"
            >
              Sign up
            </button>
          </form>

          <div className="divider" role="separator">
            <div className="divider-line" aria-hidden="true" />
            <div className="divider-text">OR</div>
            <div className="divider-line" aria-hidden="true" />
          </div>

          <div className="social-login" role="group" aria-label="Sign up with social media">
            {socialIcons.map((social, index) => (
              <button
                key={index}
                className="social-button"
                onClick={() => handleSocialLogin(social.alt)}
                aria-label={`Sign up with ${social.alt}`}
              >
                <img src={social.icon} alt="" className="social-icon" />
              </button>
            ))}
          </div>

          <div className="footer">
            <span className="footer-text">Already have an account?</span>
            <button 
              className="footer-link"
              onClick={() => {}}
              aria-label="Switch to sign in form"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};