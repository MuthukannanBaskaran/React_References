import './App.css'
import MessageContext from './context/MessageContext'
import ComponentB from './components/ComponentB'
import { myData } from './context/userData';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';
// import PromiseFetch from './components/PromiseFetch';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DisplayPosts from './components/APIPosts';
import UnitTesting from './components/UnitTesting';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <li>
            <Link to="/">ComponentB</Link>
            <Link to="/blog">BlogPage</Link>
            <Link to="/content">ContentComponent</Link>
            <Link to="/posts">Display Posts</Link>
            <Link to="/unittesting">Unit Testing</Link>
          </li>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={
          <MessageContext.Provider value={myData}>
            <ComponentB />
          </MessageContext.Provider>
        } />
        <Route path="/blog" element={
          <UserInfoContext.Provider value={myData}>
            <BlogPage />
          </UserInfoContext.Provider>
        } />
        <Route path="/content" element={
          <ThemeProvider>
            <ContentComponent />
          </ThemeProvider>
        } />
        <Route path="/posts" element={<DisplayPosts />}></Route>
        <Route path="/unittesting" element={<UnitTesting />}></Route>
      </Routes>
    </BrowserRouter>
  )
}