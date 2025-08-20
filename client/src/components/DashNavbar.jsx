import {
  HiUser,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiArrowSmRight,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

export default function DashNavbar() {
  const [tab, setTab] = useState("");
  const location = useLocation();
  // const dispatch = useDispatch();
  const { CurrentUser } = useSelector((state) => state.user);
  //
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  // const handleSignout = async () => {
  //   try {
  //     const res = await fetch("/api/user/signout", { method: "POST" });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       console.log(data.message);
  //     } else {
  //       dispatch(signoutSuccess());
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className="w-full flex justify-center mt-5">
      <nav className="inline-flex items-center justify-center px-6 py-3 shadow-lg gap-2 rounded-md dark:bg-primary dark:text-white">
        {" "}
        <Link to="/dashboard?tab=profile">
          <button
            className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
              tab === "profile"
                ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                : " dark:hover:text-accent"
            }`}
          >
            <HiUser />
            {CurrentUser?.isAdmin ? "Admin" : ""} {CurrentUser.username}
          </button>
        </Link>
        {CurrentUser.isAdmin && (
          <Link to="/dashboard?tab=dash">
            <button
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
                tab === "dash" || !tab
                  ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                  : " dark:hover:text-accent"
              }`}
            >
              <HiChartPie />
              Dashboard
            </button>
          </Link>
        )}
        {CurrentUser?.isAdmin && (
          <>
            <Link to="/dashboard?tab=posts">
              <button
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
                  tab === "posts"
                    ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                    : " dark:hover:text-accent"
                }`}
              >
                <HiDocumentText />
                Posts
              </button>
            </Link>
            <Link to="/dashboard?tab=users">
              <button
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
                  tab === "users"
                    ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                    : " dark:hover:text-accent"
                }`}
              >
                <HiOutlineUserGroup />
                Users
              </button>
            </Link>
            <Link to="/dashboard?tab=comments">
              <button
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
                  tab === "comments"
                    ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                    : " dark:hover:text-accent"
                }`}
              >
                <HiAnnotation />
                Comments
              </button>
            </Link>
            <Link to="/dashboard?tab=Categories">
              <button
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
                  tab === "Categories"
                    ? " text-accent  dark:text-accent border-b-2 border-orange-500"
                    : " dark:hover:text-accent"
                }`}
              >
                <HiAnnotation />
                Categories
              </button>
            </Link>
          </>
        )}
        {/* <button
        className="flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-[#e94560] hover:text-white ml-auto"
        onClick={handleSignout}
      >
        <HiArrowSmRight />
        Sign Out
      </button> */}
      </nav>
    </div>
  );
}
