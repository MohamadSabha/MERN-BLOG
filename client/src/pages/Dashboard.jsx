import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AdminTopBar from "../components/AdminTopBar";
import DashProfile from "../components/DashProfile";
import DashUsers from "../components/DashUsers";
import DashPosts from "../components/DashPosts";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";
import DashNavbar from "../components/DashNavbar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col mt-200">
      <AdminTopBar />
      <DashNavbar />
      <div className="flex-1 w-full px-4 py-6">
        {/* profile... */}
        {tab === "profile" && <DashProfile />}
        {/* posts... */}
        {tab === "posts" && <DashPosts />}
        {/* users */}
        {tab === "users" && <DashUsers />}
        {/* comments */}
        {tab === "comments" && <DashComments />}
        {/* dashboard comp */}
        {tab === "dash" && <DashboardComp />}
      </div>
    </div>
  );
}
