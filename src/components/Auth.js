import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthenticate = () => {
    const dummyUser = { username: "user", password: "password" };

    if (
      (isLogin &&
        username === dummyUser.username &&
        password === dummyUser.password) ||
      (!isLogin && username && password)
    ) {
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-400">
        <div className="p-6 border rounded-md bg-slate-500">
          <h1 className="text-2xl mb-4 bg-red p-6 border rounded-md bg-slate-600 text-green-500">
            STOCK MARKET DASHBOARD
          </h1>
          <h2 className="text-2xl mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username" placeholder="john@gmail.com"
                className="block text-lg font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleAuthenticate}
              className="bg-green-600 text-white p-2 rounded-md cursor-pointer text-center justify-center items-center"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-white cursor-pointer"
              onClick={handleToggle}
            >
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
