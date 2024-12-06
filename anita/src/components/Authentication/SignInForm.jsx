import * as React from "react";
import { SignInStyle } from "../../styles/SignInForm";
import { auth } from "../../firebase"; // Adjust the import path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";

export function SignInForm() {
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
      // Redirect or show success message
    } catch (err) {
      console.error("Error signing in:", err);
      setError(err.message); // Update UI with error message
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here using Firebase Auth providers
  };

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
              <label htmlFor="username" className="visually-hidden">
                Email or Phone number
              </label>
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
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
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

          <div className="divider" role="separator" aria-hidden="true">
            <span>OR</span>
          </div>

          <div 
            className="social-login" 
            role="group" 
            aria-label="Social login options"
          >
            {/* Add social login buttons */}
          </div>

          <div className="signup-prompt">
            <span className="prompt-text">Don't have an account?</span>
            <button 
              type="button" 
              className="create-account"
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
