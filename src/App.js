import React, { useState, useEffect } from 'react';
import logo from './OCD-logo.png';
import visionImage from './Vision.png';
import missionImage from './Mission.png';
import coreValuesImage from './OCD-logo.png';
import qualityPolicyImage from './OCD-logo.png';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showForgotPasswordPage, setShowForgotPasswordPage] = useState(false);

  const updateDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCreateAccount = () => {
    setShowLoginPage(true);
  };

  const handleBackToMain = () => {
    setShowLoginPage(false);
    setShowSignUpPage(false);
    setShowForgotPasswordPage(false);
  };

  const handleSignUp = () => {
    setShowSignUpPage(true);
  };

  const handleBackToLogin = () => {
    setShowSignUpPage(false);
    setShowForgotPasswordPage(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordPage(true);
  };

  return (
    <div className="App">
      {showLoginPage ? (
        showSignUpPage ? (
          <SignUpPage onBack={handleBackToLogin} />
        ) : showForgotPasswordPage ? (
          <ForgotPasswordPage onBack={handleBackToLogin} />
        ) : (
          <LoginPage onBack={handleBackToMain} onSignUp={handleSignUp} onForgotPassword={handleForgotPassword} />
        )
      ) : (
        <>
          <header className="header-small">
            <p>OCD - National Capital Region</p>
          </header>

          <header className="header-large">
            <div className="header-left">
              <img src={logo} className="logo" alt="logo" />
              <div className="header-text">
                <h1>Republic of the Philippines</h1>
                <h2>Department of National Defense</h2>
                <h3>OFFICE OF CIVIL DEFENSE</h3>
              </div>
            </div>

            <div className="header-right">
              <p className="time">{currentTime}</p>
              <p className="date">{currentDate}</p>
            </div>
          </header>

          <section className="content">
            <div className="vision-section">
              <div className="vision-text">
                <h1>VISION</h1>
                <p>Office of Civil Defense is the premier organization in Civil Defense and Disaster Risk Reduction 
                  and Management towards building a safe, secured and resilient Filipino nation by 2030.</p>
              </div>
              <div className="vision-image">
                <img src={visionImage} alt="Vision" />
              </div>
            </div>

            <div className="mission-section">
              <div className="mission-image">
                <img src={missionImage} alt="Mission" />
              </div>
              <div className="mission-text">
                <h1>MISSION</h1>
                <p>To lead in the administration of comprehensive national Civil Defense and Disaster Risk Reduction and 
                  Management programs for adaptive, safer, and disaster resilient communities towards sustainable development.</p>
                </div>
            </div>

            <div className="core-values-section">
              <div className="core-values-text">
                <h1>CORE VALUES</h1>
                <p>Office of Civil Defense is the premier organization in Civil Defense and Disaster Risk Reduction 
                  and Management towards building a safe, secured and resilient Filipino nation by 2030.</p>
              </div>
              <div className="core-values-image">
                <img src={coreValuesImage} alt="Core Values" />
              </div>
            </div>

            <div className="quality-policy-section">
              <div className="quality-policy-image">
                <img src={qualityPolicyImage} alt="Quality Policy" />
              </div>
              <div className="quality-policy-text">
                <h1>QUALITY POLICY</h1>
                <p>The OFFICE OF CIVIL DEFENSE commits to:</p>
                <p>I.   Uphold a culture of excellence, professionalism, integrity, and commitment; </p>
                <p>II.  Comply with legal and applicable requirements; and </p>
                <p>III. Ensure continual improvement of its quality management system. </p>
                <p>To meet the highest level of stakeholder satisfaction in the administration of the country's comprehensive civil defense 
                  and disaster risk reduction and management program for an adaptive, safer, and resilient Filipino community.</p>
                </div>
            </div>
          </section>

          {/* About Us Section */}
          <footer className="about-us-section">
            <div className="about-us-content">
              <p>About Us</p>
                <div className="create-account">
                <button className="create-account-button" onClick={handleCreateAccount}>
                  Create Account
                </button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

function LoginPage({ onBack, onSignUp, onForgotPassword }) {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="OCD Logo" />
        </div>

        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>

          <p className="create-account-link">
            Don't have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onSignUp(); }}>
              Sign Up
            </a>
          </p>

          <p className="forgot-password">
            <a href="#" onClick={(e) => { e.preventDefault(); onForgotPassword(); }}>
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// ... (previous code remains the same)

function SignUpPage({ onBack }) {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign Up Successful!');
    onBack();
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-logo">
          <img src={logo} alt="OCD Logo" />
        </div>

        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" required />

            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            {/* Add the "Have an account? Sign In" link */}
          <p className="have-account-link">
            Have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Sign In
            </a>
          </p>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ForgotPasswordPage({ onBack }) {
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Searching for your account...');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-header">
          <img src={logo} alt="OCD Logo" className="forgot-password-logo" />
          <div className="forgot-password-buttons">
            <button className="email-button">Email</button>
            <button className="password-button">Password</button>
            <button className="signin-button">Sign In</button>
          </div>
        </div>

        <div className="forgot-password-form">
          <h2>Find Your Account</h2>
          <p>Please enter your email to search for your account.</p>
          <form onSubmit={handleSearch}>
            <input type="email" placeholder="Enter your email" required />
            <div className="form-buttons">
              <button type="button" onClick={onBack} className="cancel-button">
                Cancel
              </button>
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </div>

        <footer className="forgot-password-footer">
          <p>OCD</p>
        </footer>
      </div>
    </div>
  );
}

export default App;