const blogData = [
  {
    id: 1,
    title: 'Getting Started with React',
    content:
      'React is a popular JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create reusable UI components and manage the state of an application efficiently.',
  },
  {
    id: 2,
    title: 'JavaScript ES6 Features You Should Know',
    content:
      'ES6 (ECMAScript 2015) introduced several new features and syntax enhancements to JavaScript, making the language more powerful and expressive. Features like arrow functions, template literals, destructuring, and class syntax have become standard in modern JavaScript development.',
  },
  {
    id: 3,
    title: 'Introduction to Node.js and Express',
    content:
      'Node.js is a server-side JavaScript runtime that allows developers to build scalable and high-performance web applications. Express.js is a popular web framework for Node.js that simplifies the process of building server-side applications and APIs.',
  },
  {
    id: 4,
    title: 'The Basics of Responsive Web Design',
    content:
      'Responsive web design is an approach to building websites that adapt and adjust to different screen sizes and devices. By using flexible layouts and media queries, websites can provide an optimal user experience on desktops, tablets, and smartphones.',
  },
  {
    id: 5,
    title: 'CSS Flexbox: A Comprehensive Guide',
    content:
      'Flexbox is a powerful layout system in CSS that allows developers to create flexible and responsive layouts. With Flexbox, you can easily align and distribute items within a container, making it a valuable tool for building modern web designs.',
  },
  {
    id: 6,
    title: 'Introduction to Python Programming',
    content:
      'Python is a versatile and beginner-friendly programming language. Its simple syntax and extensive libraries make it a popular choice for various applications, including web development, data analysis, and automation.',
  },
  {
    id: 7,
    title: 'Introduction to HTML5 Canvas',
    content:
      'The HTML5 canvas element allows developers to create dynamic and interactive graphics directly in the browser using JavaScript. With canvas, you can draw shapes, images, and animations, making it a powerful tool for creating visual effects on the web.',
  },
  {
    id: 8,
    title: 'Introduction to MongoDB',
    content:
      'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is widely used in modern web applications for its scalability and ease of use. MongoDB is known for its ability to handle large amounts of data and support high-performance applications.',
  },
  {
    id: 9,
    title: 'Building RESTful APIs with Express',
    content:
      'RESTful APIs are a crucial part of modern web development, allowing applications to communicate and exchange data. Express.js, a popular Node.js framework, provides a simple and efficient way to create RESTful APIs.',
  },
  {
    id: 10,
    title: 'Introduction to React Native',
    content:
      'React Native is a framework that allows developers to build native mobile applications using JavaScript and React. With React Native, you can create cross-platform apps for iOS and Android, sharing a significant portion of code between the two platforms.',
  },
  {
    id: 11,
    title: 'A Comprehensive Guide to CSS Grid Layout',
    content:
      'CSS Grid Layout is a two-dimensional layout system in CSS that allows you to create complex and responsive layouts with ease. It offers a grid-based approach for organizing content on web pages, providing a powerful alternative to traditional layout methods.',
  },
  {
    id: 12,
    title: 'Understanding Redux: A State Management Library for React',
    content:
      'Redux is a state management library for JavaScript applications, especially those built with React. It helps manage the application state in a predictable and centralized way, making it easier to debug, test, and maintain complex applications.',
  },
  {
    id: 13,
    title: 'Introduction to Vue.js',
    content:
      'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, allowing developers to use as much or as little of it as needed. Vue.js is known for its simplicity, flexibility, and excellent documentation.',
  },
  {
    id: 14,
    title: 'Building Real-Time Web Applications with Socket.io',
    content:
      'Socket.io is a JavaScript library that enables real-time communication between clients and servers. It facilitates bi-directional communication and allows developers to build interactive and responsive web applications that update in real-time without the need to refresh the page.',
  },
  {
    id: 15,
    title: 'The Fundamentals of Object-Oriented Programming in Java',
    content:
      'Object-Oriented Programming (OOP) is a programming paradigm based on the',
  },
];

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/Navbar';
import BlogPreviewCard from './Components/BlogPreviewCard';
import BlogPage from './Pages/BlogPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Project from './Pages/Project';

const postsPerPage = 10;

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToPreview = () => {
    setSelectedBlog(null);
  };

  return (
    <Router>
      <Routes>
        <Route path='/about' element={<AboutMe />} />
        <Route
          path='/'
          element={
            <div className='App'>
              <header>
                <Navbar />
              </header>
              <main>
                {selectedBlog ? (
                  <BlogPage
                    blog={selectedBlog}
                    onClickBack={handleBackToPreview}
                  />
                ) : (
                  <>
                    <h2 className='navbar'>Tech Blog</h2>
                    <div className='blog-card-container'>
                      {currentPosts.map((blog) => (
                        <BlogPreviewCard
                          key={blog.id}
                          blog={blog}
                          onClick={handleBlogClick}
                        />
                      ))}
                    </div>
                    <div className='pagination'>
                      {blogData.length > postsPerPage &&
                        Array.from(
                          { length: Math.ceil(blogData.length / postsPerPage) },
                          (_, index) => (
                            <span
                              key={index}
                              className={
                                currentPage === index + 1 ? 'active' : ''
                              }
                              onClick={() => setCurrentPage(index + 1)}
                            >
                              <div className='pagination'>{index + 1}</div>
                            </span>
                          )
                        )}
                    </div>
                  </>
                )}
              </main>
            </div>
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
