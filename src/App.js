import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProfileDetail from "./pages/ProfileDetail";

function App() {
  // Manage authentication state
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle user login
  const handleLogin = (userData) => {
    // Perform login logic
    setUser(userData);
    setLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div className={styles.App}>
      {/* Render NavBar with authentication props */}
      <NavBar loggedIn={loggedIn} user={user} onLogout={handleLogout} />
      <Container className={styles.Main}>
        <Routes>
          <Route exact="true" path="/" render={() => <h1>Home page</h1>} />
          {/* Render SignUpForm with handleLogin function */}
          <Route exact="true" path="/signin" element={<SignInForm />} render={() => <SignInForm onLogin={handleLogin} />} />
          <Route exact="true" path="/signup" element={<SignUpForm />}render={() => <SignUpForm onLogin={handleLogin} />} />
          {/* Render ProfileDetail with loggedIn and user props */}
          <Route path="/profile/:username" element={<ProfileDetail />} render={(props) => <ProfileDetail {...props} loggedIn={loggedIn} user={user} />} />
          <Route render={() => <p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
