import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProfileDetail from "./pages/ProfileDetail";
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route path="/" render={() => <PostsPage message="No results found. Adjust the search keyword." />} />
              <Route path="/feed" render={() => <PostsPage 
              message="No results found. Adjust the search keyword or follow a user." 
              filter={`owner__followed__owner__profile=${profile_id}&`}
              />} 
              />
              <Route path="/liked" 
              render={() => <PostsPage message="No results found. Adjust the search keyword or like a post." 
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />} 
              />
              <Route path="/signin" render={() => <SignInForm />} />
              <Route path="/signup" render={() => <SignUpForm />} />
              <Route path="/profile/:username" render={() => <ProfileDetail />} />
              <Route path="/posts/create" render={() => <PostCreateForm />} />
              <Route path="/posts/:id" render={() => <PostPage />} />
              <Route path="*" render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;
