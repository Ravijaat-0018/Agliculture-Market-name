import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Both fields are required');
    } else {
      // Implement your login logic here (e.g., API call)
      console.log(`Logging in with Email: ${email}, User Type: ${userType}`);
      setErrorMessage('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Agriculture-Market</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="userType">Login as</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="buyer">Buyer</option>
          </select>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit">Login</button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
