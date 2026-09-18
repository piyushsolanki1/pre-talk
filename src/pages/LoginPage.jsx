import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login submitted");

    navigate("/HomePage");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

        <h1 className="mb-2 text-center text-3xl font-bold text-purple-600">
          Welcome to Pretalk
        </h1>

        <h2 className="mb-4 text-center text-md font-semibold text-gray-600">
          Sign In to continue
        </h2>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => (window.location.href = "/auth/google")}
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-2 py-2 font-medium text-black shadow-2xl"
        >
          Continue with Google
        </button>

        <p className="mb-4 flex justify-center text-gray-500">
          or continue with email
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Forgot Password */}
          <button
            type="button"
            className="mb-4 flex text-md text-purple-600 hover:underline"
          >
            Forgot password?
          </button>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;