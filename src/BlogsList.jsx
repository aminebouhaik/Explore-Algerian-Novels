import { Link } from "react-router-dom";

const Homepage = ({ blogs }) => {
  return (
    <div className="Homepage">
      <h2>Five Algerian Novelists Whose Work Is Shaping Algerian Literature</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.body.slice(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;

