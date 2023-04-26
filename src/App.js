import './variables.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import Login from './pages/Login';
import MakePost from './pages/MakePost';
import PostDetail from './pages/PostDetail';
import VideoResult from './pages/VideoResult';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/category" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<MakePost />} />
          <Route path="/category/:postId" element={<PostDetail />} />
          <Route path="/video" element={<VideoResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
