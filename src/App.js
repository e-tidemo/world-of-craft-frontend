import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
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
      {/* Pass authentication state and functions as props to NavBar */}
      <NavBar loggedIn={loggedIn} user={user} onLogout={handleLogout} />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin">
            {/* Pass handleLogin function as a prop to SignUpForm */}
            <SignUpForm onLogin={handleLogin} />
          </Route>
          <Route exact path="/signup" render={() => <SignUpForm onLogin={handleLogin} />} />
          <Route path="/profile/:username">
            {/* Pass loggedIn and user as props to ProfileDetail */}
            <ProfileDetail loggedIn={loggedIn} user={user} />
          </Route>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
