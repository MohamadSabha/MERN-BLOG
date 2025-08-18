import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { CurrentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user/getusers?limit=5");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comment/getcomments?limit=5");
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (CurrentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [CurrentUser]);
  return (
    <div className="p-3 md:mx-auto bg-gradient-to-br min-h-screen dark:bg-black dark:bg-none">
      {/* Dashboard Header */}
      <div className="max-w-6xl mx-auto mb-8"></div>
      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        {/* total users div */}
        <div className="flex flex-col p-5 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 gap-4 md:w-72 w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:border  dark:border-yellow-700">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 dark:text-yellow-300 text-md uppercase">
                Total Users
              </h3>
              <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">
                {totalUsers}
              </p>
            </div>
            <HiOutlineUserGroup className="bg-gradient-to-br from-red-500 via-yellow-400 to-yellow-300 text-black dark:text-primary rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-600 dark:text-green-400 flex items-center font-semibold">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className="text-gray-500 dark:text-gray-400">Last month</div>
          </div>
        </div>
        {/* total comments div */}
        <div className="flex flex-col p-5 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 gap-4 md:w-72 w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:border  dark:border-yellow-700">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 dark:text-yellow-300 text-md uppercase">
                Total Comments
              </h3>
              <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">
                {totalComments}
              </p>
            </div>
            <HiAnnotation className="bg-gradient-to-br from-red-500 via-yellow-400 to-yellow-300 text-black dark:text-primary rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-600 dark:text-green-400 flex items-center font-semibold">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div className="text-gray-500 dark:text-gray-400">Last month</div>
          </div>
        </div>
        {/* total posts div */}
        <div className="flex flex-col p-5 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 gap-4 md:w-72 w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:border  dark:border-yellow-700">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 dark:text-yellow-300 text-md uppercase">
                Total Posts
              </h3>
              <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">
                {totalPosts}
              </p>
            </div>
            <HiDocumentText className="bg-gradient-to-br from-red-500 via-yellow-400 to-yellow-300 text-black dark:text-primary rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-600 dark:text-green-400 flex items-center font-semibold">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div className="text-gray-500 dark:text-gray-400">Last month</div>
          </div>
        </div>
      </div>
      {/* Tables Section */}
      <div className="flex flex-wrap gap-6 py-3 mx-auto justify-center">
        {/* recent users table */}
        <div className="flex flex-col w-full md:w-auto shadow-lg p-4 rounded-xl bg-white dark:bg-black border border-yellow-200 dark:border-yellow-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90 inline-flex items-center gap-2 px-3 py-1 ">
              <HiOutlineUserGroup className="text-orange-400" />
              Recent Users
            </span>

            <Button outline gradientDuoTone="redToYellow" size="sm">
              <Link to={"/dashboard?tab=users"}>See all</Link>
            </Button>
          </div>
          <Table hoverable className="text-sm">
            <TableHead>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                User image
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Username
              </TableHeadCell>
            </TableHead>
            {users &&
              users.map((user) => (
                <TableBody key={user._id} className="divide-y">
                  <TableRow
                    className="dark:bg-primary dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-slate-500 dark:hover:text-white hover:text-accent bg-slate-50
                  hover:bg-white "
                  >
                    <TableCell>
                      <img
                        src={user.ProfilePicture}
                        alt="user"
                        className="w-10 h-10 rounded-full bg-gray-200 border"
                      />
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
        {/* recent comments table */}
        <div className="flex flex-col w-full md:w-auto shadow-lg p-4 rounded-xl bg-white dark:bg-black border border-yellow-200 dark:border-yellow-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90 inline-flex items-center gap-2 px-3 py-1 ">
              <HiAnnotation className="text-orange-400" />
              Recent Comments
            </span>

            <Button outline gradientDuoTone="redToYellow" size="sm">
              <Link to={"/dashboard?tab=comments"}>See all</Link>
            </Button>
          </div>
          <Table hoverable className="text-sm">
            <TableHead>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Comment
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Likes
              </TableHeadCell>
            </TableHead>
            {comments &&
              comments.map((comment) => (
                <TableBody key={comment._id} className="divide-y">
                  <TableRow
                    className="dark:bg-primary dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-slate-500 dark:hover:text-white hover:text-accent bg-slate-50
                  hover:bg-white "
                  >
                    <TableCell className="w-72">
                      <p className="line-clamp-2">{comment.content}</p>
                    </TableCell>
                    <TableCell>{comment.numberOfLikes}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
        {/* recent posts table */}
        <div className="flex flex-col w-full md:w-auto shadow-lg p-4 rounded-xl bg-white dark:bg-black border border-yellow-200 dark:border-yellow-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90 inline-flex items-center gap-2 px-3 py-1 ">
              <HiDocumentText className="text-orange-400" /> Recent Posts
            </span>
            <Button outline gradientDuoTone="redToYellow" size="sm">
              <Link to={"/dashboard?tab=posts"}>See all</Link>
            </Button>
          </div>
          <Table hoverable className="text-sm">
            {/* Table Header */}
            <TableHead>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Image
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Title
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Category
              </TableHeadCell>
            </TableHead>

            {/* Table Body */}
            {posts &&
              posts.map((post) => (
                <TableBody key={post._id} className="divide-y">
                  <TableRow
                    className="dark:bg-primary dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-slate-500 dark:hover:text-white hover:text-accent bg-slate-50
                  hover:bg-white "
                  >
                    <TableCell>
                      <img
                        src={post.image}
                        alt="post"
                        className="w-14 h-10 rounded-md bg-gray-200 dark:bg-gray-800 border"
                      />
                    </TableCell>
                    <TableCell className="w-72">{post.title}</TableCell>
                    <TableCell>{post.category}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
