import React, { useEffect, useState } from "react";
import axios from "axios";
import MaxContainer from "../../components/maxContainer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=${apiKey}`
        );
        setPosts(response.data.articles); // Use response.data.articles instead of response.data.items
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="bg-[#3D6A70] py-[24px]">
        <h1 className="text-[56px] font-bold max-w-[1280px] max-md:text-[20px] w-full mx-auto px-[32px] 2xl:px-0">
          Blog
        </h1>
      </div>
      <MaxContainer>
        <div className="font-medium my-[56px] flex flex-col w-full gap-[24px]">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="blog-post">
                <h2 className="text-[24px] font-bold">{post.title}</h2>
                <img src={post.urlToImage} alt="" />
                <p className="text-[16px] text-[#595A5C]">{post.description}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            ))
          )}
        </div>
      </MaxContainer>
    </>
  );
};

export default Blog;
