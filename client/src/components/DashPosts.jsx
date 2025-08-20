import {
  Modal,
  Table,
  Button,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  ModalHeader,
  ModalBody,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { set } from "mongoose";

export default function DashPosts() {
  const { CurrentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${CurrentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (CurrentUser.isAdmin) {
      fetchPosts();
    }
  }, [CurrentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${CurrentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${CurrentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {CurrentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <div className="flex justify-center my-4">
            <Link to="/create-post">
              <Button
                type="button"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition-all duration-300 hover:brightness-90"
              >
                Create a new post
              </Button>
            </Link>
          </div>

          <Table hoverable className="shadow-md">
            <TableHead>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Date updated
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Post image
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Post title
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Category
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                Delete
              </TableHeadCell>
              <TableHeadCell className="dark:bg-primary  bg-slate-50  dark:text-white text-primary border-b-2 border-accent">
                <span>Edit</span>
              </TableHeadCell>
            </TableHead>

            <TableBody className="divide-y">
              {userPosts.map((post) => (
                <TableRow
                  key={post._id}
                  className="dark:bg-primary dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-slate-500 dark:hover:text-white hover:text-accent bg-slate-50
                  hover:bg-white "
                >
                  <TableCell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {showMore && (
            <div className="flex justify-center my-4">
              <button
                onClick={handleShowMore}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90"
              >
                Show more
              </button>
            </div>
          )}
        </>
      ) : (
        <p>You have no posts yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
        className="dark:bg-black/70"
      >
        <ModalHeader className="dark:bg-primary" />
        <ModalBody className="dark:bg-primary">
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
