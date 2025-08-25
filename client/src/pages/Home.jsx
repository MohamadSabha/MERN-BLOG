import { Link } from "react-router-dom";
import CallToAction from "../components/CallToActionHome";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

import reactimg from "../assets/react.png";
import nodeimg from "../assets/Node.png";
import mongoimg from "../assets/mongodb.png";
import expressimg from "../assets/express.png";
import firebaseimg from "../assets/firebase.png";

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
      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div class="blur-[106px] h-56 bg-gradient-to-br from-red-400 to-yellow-400 "></div>
          <div class="blur-[106px] h-56 bg-gradient-to-br from-red-400 to-yellow-400 "></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative">
            <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
              <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Welcome to the Full Stack MERN Blog
              </h1>
              <div class="flex items-center justify-center -space-x-2">
                <img
                  loading="lazy"
                  width="400"
                  height="400"
                  src={mongoimg}
                  alt="member photo"
                  class="h-8 w-8 rounded-full object-cover"
                />
                <img
                  loading="lazy"
                  width="200"
                  height="200"
                  src={nodeimg}
                  alt="member photo"
                  class="h-12 w-12 rounded-full object-cover"
                />
                <img
                  loading="lazy"
                  width="200"
                  height="200"
                  src={reactimg}
                  alt="member photo"
                  class="z-10 h-16 w-16 rounded-full object-cover"
                />
                <img
                  loading="lazy"
                  width="200"
                  height="200"
                  src={expressimg}
                  alt="member photo"
                  class="relative h-14 w-12 rounded-full object-cover"
                />
                <img
                  loading="lazy"
                  width="200"
                  height="200"
                  src={firebaseimg}
                  alt="member photo"
                  class="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <p class="text-center text-xl text-gray-600 dark:text-gray-300">
                Explore articles, tutorials, and resources to grow as a
                developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="animate-fade-in relative bg-gradient-to-br from-gray-800 to-indigo-900 h-[350px] flex items-center justify-center mb-10 rounded-b-3xl shadow-lg">
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
        </div>
      </div> */}

      {/* Recent Posts */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3 animate-fade-in delay-500">
        {/* Section Divider */}
        <div className="flex items-center justify-center my-8 animate-fade-in delay-600">
          <div className="flex-grow h-0.5 bg-yellow-400 mx-4" />
          <span className="px-6 py-2  rounded-full shadow text-accent font-bold text-xl tracking-wide border border-yellow-300">
            Latest Posts
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
                className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-r from-red-700 to-yellow-600 group shadow transition-all duration-300 ease-in-out hover:brightness-90"
              >
                <span className="relative px-5 py-2.5"> View all posts</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Call To Action */}
      <div className="rounded-xl shadow-lg p-6"></div>
      <CallToAction />

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
