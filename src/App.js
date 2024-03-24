import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProfileDetail from "./pages/ProfileDetail";
import PostCreateForm from './pages/posts/PostCreateForm';


function App() {

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route path="/" render={() => <h1>Home page</h1>} />
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/profile/:username" element={<ProfileDetail />} />
              <Route path="/posts/create" element={<PostCreateForm />}/>
              <Route path="*" element={<p>Page not found!</p>} />
            </Routes>
          </Container>
        </div>
  );
}

export default App;
