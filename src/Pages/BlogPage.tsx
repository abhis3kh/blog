import React from 'react';
import './BlogPage.css';

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogPageProps {
  blog: Blog;
  onClickBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ blog, onClickBack }) => {
  return (
    <>
      <div className='blog-post'>
        <h1 className='blog-post-title mb-4'>{blog.title}</h1>
        <p className='blog-post-date mb-2'>Published: 31/12/2099</p>
        <p className='blog-post-content'>{blog.content}</p>
      </div>
      <button onClick={onClickBack} id='backButton'>
        Back to Preview
      </button>
    </>
  );
};

export default BlogPage;
