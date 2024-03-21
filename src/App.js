import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
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
    // Perform login logic (e.g., set user data in state)
    setUser(userData);
    setLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear user data from state)
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div className={styles.App}>
      {/* Render NavBar with authentication props */}
      <NavBar loggedIn={loggedIn} user={user} onLogout={handleLogout} />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          {/* Render SignUpForm with handleLogin function */}
          <Route exact path="/signin" render={() => <SignInForm onLogin={handleLogin} />} />
          <Route exact path="/signup" render={() => <SignUpForm onLogin={handleLogin} />} />
          {/* Render ProfileDetail with loggedIn and user props */}
          <Route path="/profile/:username" render={(props) => <ProfileDetail {...props} loggedIn={loggedIn} user={user} />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
