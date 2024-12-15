import * as React from "react";
import { SignInStyle } from "../../styles/SignInForm";
import { auth } from "../../firebase"; // Adjust the import path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });
  const [error, setError] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.username,
        formData.password
      );
      console.log("User signed in:", userCredential.user);
      navigate("/home");
    } catch (err) {
      console.error("Error signing in:", err);
      setError(err.message);
    }
  };

  const socialLoginOptions = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/24ced0b02863b36f16279f7c499953ce7e44c3f92e95aee4fcbdcea76766236c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Social login option 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a7db5e3d7b2d6526597ed89ea0b0f4c94e189b4f7faff2d03070a8a1f31b48ed?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Social login option 2"
    }
  ];

  return (
    <>
      <main className="auth-container">
        <form 
          className="auth-form" 
          onSubmit={handleSubmit}
          aria-labelledby="signin-header"
        >
          <div className="auth-header">
            <div className="header-content">
              <h1 id="signin-header">Sign in</h1>
              {error && <p className="error-message">{error}</p>}
            </div>
            
            <div className="form-group">
              
              <input
                type="email"
                id="username"
                name="username"
                className="form-input"
                placeholder="Email"
                value={formData.username}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
            
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </div>

            <button
              type="button"
              className="forgot-password"
              onClick={() => {}}
              aria-label="Reset password"
            >
              Forgot your password?
            </button>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            aria-label="Sign in to your account"
          >
            Sign in
          </button>

          <div className="divider" role="separator">
            <div className="divider-line" aria-hidden="true" />
            <div className="divider-text">OR</div>
            <div className="divider-line" aria-hidden="true" />
          </div>

          <div className="social-login">
        {socialLoginOptions.map((option, index) => (
          <button
            key={index}
            className="social-button"
            tabIndex={0}
            aria-label={`Login with ${option.alt}`}
          >
            <img
              loading="lazy"
              src={option.src}
              alt={option.alt}
              className="social-login-icon"
            />
          </button>
        ))}
          </div>

          <div className="signup-prompt">
            <span className="prompt-text">Don't have an account? </span>
            <button 
              type="social-button" 
              className="footer-link"
              onClick={() => {}}
              aria-label="Create a new account"
            >
              Create account
            </button>
          </div>
        </form>
      </main>
      <style jsx>{SignInStyle}</style>
    </>
  );
}
export default SignInForm;