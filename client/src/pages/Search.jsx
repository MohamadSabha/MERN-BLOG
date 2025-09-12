import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "all",
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // state for categories
  const [categories, setCategories] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();
  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category/getCategories");
        if (res.ok) {
          const data = await res.json();
          setCategories(data.categories || []);
        }
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category") || "all";
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    // urlParams.set("category", sidebarData.category);

    // Only send category if it's not "all"
    if (sidebarData.category !== "all") {
      urlParams.set("category", sidebarData.category);
    } else {
      urlParams.delete("category");
    }
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Horizontal Filter Bar */}
      <form
        className="flex flex-wrap gap-4 items-center dark:bg-primary rounded-xl shadow-lg p-6 mb-8 border border-y-accent"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-[180px]">
          <label className="font-semibold mr-2" htmlFor="searchTerm">
            Search:
          </label>
          <TextInput
            placeholder="Search..."
            id="searchTerm"
            type="text"
            value={sidebarData.searchTerm}
            onChange={handleChange}
            className="w-full sm:w-[180px]"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-[140px]">
          <label className="font-semibold mr-2" htmlFor="sort">
            Sort:
          </label>
          <Select
            onChange={handleChange}
            value={sidebarData.sort}
            id="sort"
            className="w-full sm:w-[120px]"
          >
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-[160px]">
          <label className="font-semibold mr-2" htmlFor="category">
            Category:
          </label>
          <Select
            onChange={handleChange}
            value={sidebarData.category}
            id="category"
            className="w-full sm:w-[140px]"
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </Select>
        </div>

        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden 
            text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 
            to-yellow-600 group-hover:from-yellow-400 group-hover:to-yellow-600 hover:text-white 
            dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 
            dark:focus:ring-yellow-800"
        >
          <span
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white 
              dark:bg-gray-900 rounded-md group-hover:bg-transparent 
              group-hover:dark:bg-transparent"
          >
            Apply Filters
          </span>
        </button>
      </form>

      {/* Results */}
      <h1 className="text-3xl font-semibold border-b border-gray-200 p-3 mb-4">
        Posts results:
      </h1>
      <div className="p-1 flex flex-wrap gap-2">
        {!loading && posts.length === 0 && (
          <p className="text-xl text-gray-500">No posts found.</p>
        )}
        {loading && <p className="text-xl text-gray-500">Loading...</p>}
        {!loading &&
          posts &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
        {showMore && (
          <button
            onClick={handleShowMore}
            className="text-indigo-600 text-lg hover:underline p-7 w-full"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
