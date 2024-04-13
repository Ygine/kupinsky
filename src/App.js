import {Route, Routes, Navigate } from 'react-router-dom';
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import SinglePage from "./pages/SinglePage"
import EditPostPage from "./pages/EditPostPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import CreatePostPage from "./pages/CreatePost"

import RequireAuth from "./hook/requireAuth"
import AuthProvider from "./hook/AuthProvider"

const App = () => {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <HomePage />}/>
        <Route path="about" element={ <AboutPage />}/>
        <Route path="about-us" element={ <Navigate to={'/about'} replace/>} />
        <Route path="posts" element={ <BlogPage />}/>
        <Route path="posts/:id" element={ <SinglePage />}/>
        <Route path="posts/:id/edit" element={
          <RequireAuth>
            <EditPostPage />
          </RequireAuth>
        }/>
        <Route path="posts/create" element={
          <RequireAuth>
            <CreatePostPage />
          </RequireAuth>
          }>
        </Route>
        <Route path="login" element={ <LoginPage />}/>
        <Route path="*" element={ <NotFoundPage />}/>
      </Route>
    </Routes>
  </AuthProvider>
  );
}

export default App;
