import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// Sample blog data (You can replace this with actual data from a database)
const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content:
      'This is the content of Blog Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content:
      'This is the content of Blog Post 2. Ut ullamcorper, mi eu fermentum laoreet...',
  },
  // Add more blog posts as needed
];

const BlogCard: React.FC<{ post: any }> = ({ post }) => (
  <div className='blog-card'>
    <h2>{post.title}</h2>
    <p>{post.content.substring(0, 200)}...</p>
    <Link to={`/blog/${post.id}`}>Read More</Link>
  </div>
);

const BlogPreview: React.FC = () => (
  <div className='container'>
    <h1>Welcome to My Blog!</h1>
    {blogPosts.map((post) => (
      <div key={post.id} className='blog-preview'>
        <h2>{post.title}</h2>
        <p>{post.content.substring(0, 200)}...</p>
        <Link to={`/blog/${post.id}`} className='read-more'>
          Read More
        </Link>
      </div>
    ))}
  </div>
);

const BlogPost: React.FC<{ postId: string }> = ({ postId }) => {
  const post = blogPosts.find((post) => post.id.toString() === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='container'>
      <h1>{post.title}</h1>
      <div className='blog-post-content'>{post.content}</div>
      <Link to='/' className='back-to-home'>
        Back to Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<BlogPreview />} />
          <Route path='/blog/:postId' element={<BlogPost />} />
          {/* Add more routes for projects and contact pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
