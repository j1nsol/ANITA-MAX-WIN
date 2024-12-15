import React, { useState } from 'react';
import { AuthStyles } from '../../styles/AuthStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { auth, db } from '../../firebase'; // Ensure db is imported from your firebase.js

export const SignUpForm = ({ onClose, switchToSignIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreement: false,
    token: 0
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    agreement: ''
  });

  const socialIcons = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/24ced0b02863b36f16279f7c499953ce7e44c3f92e95aee4fcbdcea76766236c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', alt: 'Facebook' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a7db5e3d7b2d6526597ed89ea0b0f4c94e189b4f7faff2d03070a8a1f31b48ed?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', alt: 'Google' },
  ];

  const validateForm = async () => {
    let valid = true;
    const newErrors = {
      username: '',
      email: '',
      password: '',
      agreement: ''
    };

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else {
      const usernameQuery = query(
        collection(db, 'User'),
        where('username', '==', formData.username)
      );
      const usernameSnapshot = await getDocs(usernameQuery);
      if (!usernameSnapshot.empty) {
        newErrors.username = 'Username is already taken';
        valid = false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password is too weak';
      valid = false;
    }

    // Checkbox validation
    if (!formData.agreement) {
      newErrors.agreement = 'You must agree to the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (!isValid) return; // Don't submit if validation fails
    
    const { email, password, username, token } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'User', user.uid);
      await setDoc(userDocRef, { username, token });

      console.log("Account Created Successfully!", user);
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <AuthStyles />
        <div className="auth-container">
          <div className="header-wrapper">
            <h1 style={{margin: "0"}}>Sign up</h1>
            <button 
              className="close-icon"
              aria-label="Close signup form"
              onClick={onClose}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/830b8d1828f732aad5cc1707f6ef527de829577e995be70bd1351d474bdf6b82?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                alt="Close"
              />
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="username" className="visually-hidden">
                Username
              </label>
              <input
                id="username"
                type="text"
                className={`form-input ${errors.username ? 'error' : ''}`}
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                aria-required="true"
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>
            <div className="input-group">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                aria-required="true"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="input-group">
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`form-input ${errors.password ? 'error' : (formData.password.length < 6 ? 'weak' : '')}`}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                aria-required="true"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
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
                I agree to the <button className="link-button">User Agreement</button> & confirm I am at least 18 years old
              </label>
              {errors.agreement && <div className="error-message">{errors.agreement}</div>}
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
                aria-label={`Sign up with ${social.alt}`}
              >
                <img src={social.icon} alt={social.alt} className="social-icon" />
              </button>
            ))}
          </div>

          <div className="footer">
            <span className="footer-text">Already have an account?</span>
            <button 
              className="signin-link"
              onClick={switchToSignIn}
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

export default SignUpForm;
