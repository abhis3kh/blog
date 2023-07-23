const BlogPreviewCard = ({ blog, onClick }) => {
  return (
    <div className='blog-card' onClick={() => onClick(blog)}>
      <h3 className='preview-title'>{blog.title}</h3>
      <p className='preview-content'>{blog.content.slice(0, 100)}...</p>
    </div>
  );
};

export default BlogPreviewCard;
