import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import { useState } from "react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function Signin() {
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error: errorMessage, loading } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
      // return setErrorMessage("Please fill out all fields.");
    }
    try {
      dispatch(signInStart());
      // setLoading(true);
      // setErrorMessage(null);
      const res = await fetch("/api/auth/Signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        // setLoading(false);
        // return setErrorMessage(data.message);
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      // setErrorMessage(error.message);
      // setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-40">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side div */}
        <div className="flex-1 flex flex-col items-center justify-center text-center -mt-10">
          <Link to="/">
            <img src={logo} alt="MHD's Logo" className="w-36 h-36" />
          </Link>

          <h3 className="font-bold text-orange-600">🔑 Demo Project Access</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            You can log in with Google or any email address (fake emails are
            accepted).
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            <strong>Admin demo account:</strong>
            <br />
            Email:{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              admin@hotmail.com
            </code>
            <br />
            Password:{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              admin123
            </code>
          </p>
        </div>

        {/* right side div */}

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* email div */}
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            {/* password div */}
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="***********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 group shadow transition-all duration-300 ease-in-out hover:brightness-90"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>You don't Have an account?</span>
            <Link
              to="/sign-up"
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 font-medium text-sm transition-all duration-300 ease-in-out hover:brightness-90"
            >
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
