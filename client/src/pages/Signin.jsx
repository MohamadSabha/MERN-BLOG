import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  signinStart,
  signinSuccess,
  signinFailure,
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
      return dispatch(signinFailure("Please fill out all fields."));
      // return setErrorMessage("Please fill out all fields.");
    }
    try {
      dispatch(signinStart());
      // setLoading(true);
      // setErrorMessage(null);
      const res = await fetch("/api/auth/Signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
        // setLoading(false);
        // return setErrorMessage(data.message);
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
      // setErrorMessage(error.message);
      // setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side div */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              MHD's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can log in with your email and password
            or with Google.
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span an className="pl-3">
                    Loading...
                  </span>
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>You don't Have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
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
