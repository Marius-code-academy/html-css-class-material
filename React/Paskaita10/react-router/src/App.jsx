import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from './components/ContactsPage/ContactsPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import PostPage from './components/PostPage/PostPage';
import PostsPage from './components/PostsPage/PostsPage';

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/home' element={<h1>Home page</h1>} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/post/:id' element={<PostPage />}/>
        <Route path='/posts' element={<PostsPage />} />
      </Routes>
    </div>
  )
}

export default App
