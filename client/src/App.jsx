import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/About" element={<About />} />
          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/Sign-up" element={<Signup />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route path="/search" element={<Search />} />
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/Create-Post" element={<CreatePost />} />
            <Route path="/Update-Post/:postId" element={<UpdatePost />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
