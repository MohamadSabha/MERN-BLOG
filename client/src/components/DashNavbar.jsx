import {
  HiUser,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiArrowSmRight,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

export default function DashNavbar() {
  const [tab, setTab] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const { CurrentUser } = useSelector((state) => state.user);
  //
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="w-full bg-[#1a1a2e] text-white flex items-center px-6 py-3 shadow-lg gap-2">
      <Link to="/dashboard?tab=profile">
        <button
          className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
            tab === "profile" ? "bg-[#e94560] text-white" : "hover:bg-[#16213e]"
          }`}
        >
          <HiUser />
          {CurrentUser?.isAdmin ? "Admin" : "User"}
        </button>
      </Link>
      {CurrentUser && CurrentUser.isAdmin && (
        <Link to="/dashboard?tab=dash">
          <button
            className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
              tab === "dash" || !tab
                ? "bg-[#e94560] text-white"
                : "hover:bg-[#16213e]"
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
                  ? "bg-[#e94560] text-white"
                  : "hover:bg-[#16213e]"
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
                  ? "bg-[#e94560] text-white"
                  : "hover:bg-[#16213e]"
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
                  ? "bg-[#e94560] text-white"
                  : "hover:bg-[#16213e]"
              }`}
            >
              <HiAnnotation />
              Comments
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
  );
}
