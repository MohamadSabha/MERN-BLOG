import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="animate-fade-in relative bg-gradient-to-br from-gray-800 to-indigo-900 h-[350px] flex items-center justify-center mb-10 rounded-b-3xl shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
          alt="Blog Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-b-3xl"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in delay-100">
            Welcome to the Full Stack MERN Blog
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-medium mb-6 animate-fade-in delay-200">
            Explore articles, tutorials, and resources to grow as a developer.
          </p>
          <Link
            to="/search"
            className="inline-block px-6 py-2 bg-accent text-black font-bold rounded-full shadow hover:bg-white hover:text-accent transition-all duration-200 animate-fade-in delay-300"
          >
            View all posts
          </Link>
        </div>
      </div>

      {/* Call To Action */}
      <div className="max-w-3xl mx-auto mb-10 animate-fade-in delay-400">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CallToAction />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3 animate-fade-in delay-500">
        {/* Section Divider */}
        <div className="flex items-center justify-center my-8 animate-fade-in delay-600">
          <div className="flex-grow h-0.5 bg-yellow-400 mx-4" />
          <span className="px-6 py-2 bg-white rounded-full shadow text-yellow-600 font-bold text-xl tracking-wide border border-yellow-300">
            <svg
              className="inline-block w-6 h-6 mr-2 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Latest Articles
          </span>
          <div className="flex-grow h-0.5 bg-yellow-400 mx-4" />
        </div>
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 animate-fade-in delay-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post, idx) => (
                <div
                  className={`transition-transform duration-200 hover:scale-105 animate-fade-in delay-${
                    800 + idx * 50
                  }`}
                  key={post._id}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            <div className="relative z-10 text-center px-6">
              <Link
                to="/search"
                className="inline-block px-6 py-2 bg-accent text-black font-bold rounded-full shadow hover:bg-white hover:text-accent transition-all duration-200 animate-fade-in delay-300"
              >
                View all posts
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Add some subtle fade-in animation */}
      <style>
        {`
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 1s forwards;
          }
          .animate-fade-in.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
          .animate-fade-in.delay-300 { animation-delay: 0.3s; }
          .animate-fade-in.delay-400 { animation-delay: 0.4s; }
          .animate-fade-in.delay-500 { animation-delay: 0.5s; }
          .animate-fade-in.delay-600 { animation-delay: 0.6s; }
          .animate-fade-in.delay-700 { animation-delay: 0.7s; }
          .animate-fade-in.delay-800 { animation-delay: 0.8s; }
          .animate-fade-in.delay-850 { animation-delay: 0.85s; }
          .animate-fade-in.delay-900 { animation-delay: 0.9s; }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
