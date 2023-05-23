import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostLoader } from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<WelcomePage />}/>
    <Route path="/blog" element={<BlogLayout />}>
      {/* the loader prop isn't available if your using browserRouter, to use it you need the RouterProvider instead */}
      <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
      <Route path=":id" element={<PostDetailPage />} />
    </Route>
    <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
));
function App() {
  // https://www.youtube.com/watch?v=L2kzUg6IzxM
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
