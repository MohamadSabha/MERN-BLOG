import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/delete- CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

export default function PostPage() {
  const { CurrentUser } = useSelector((state) => state.user);

  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(
          "Something went wrong while fetching the post." + error.message
        );
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2> {error}</h2>
      </div>
    );
  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>

      <div className="flex flex-wrap gap-2 self-center mt-5">
        {post?.categories?.map((cat) => (
          <Link key={cat._id} to={`/search?category=${cat._id}`}>
            <Button color="gray" pill size="xs">
              {cat.name}
            </Button>
          </Link>
        ))}
      </div>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
      {CurrentUser?.isAdmin && (
        <Link
          className="text-teal-500 hover:underline"
          to={`/update-post/${post._id}`}
        >
          <Button
            type="button"
            className=" mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition- duration-300 hover:brightness-90"
          >
            Edit this post
          </Button>
        </Link>
      )}
      <CommentSection postId={post._id} />

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-transparent text-xl mt-5  bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium  transition-all duration-300 ease-in-out hover:brightness-90">
          Recent articles
        </h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
