import { useState, useEffect } from "react";
import BlogsList from "./BlogsList"; 
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="All Blogs!" />}   
    </div>
  );
};

export default Home;

