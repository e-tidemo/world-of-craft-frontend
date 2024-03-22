import React, { createContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProfileDetail from "./pages/ProfileDetail";
import axios from 'axios';

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/')
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route path="/" render={() => <h1>Home page</h1>} />
              <Route path="/signin" element={<SignInForm />} render={() => <SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} render={() => <SignUpForm />} />
              <Route path="/profile/:username" element={<ProfileDetail />} render={(props) => <ProfileDetail />} />
              <Route path="*" element={<p>Page not found!</p>} />
            </Routes>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
