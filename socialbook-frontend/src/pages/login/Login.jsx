import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-bg">
      <div className="w-4/5 lg:w-2/3 bg-white shadow-xl rounded-lg p-8 my-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back to SocialBook!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to SocialBook! 📚 Where finding friends is as easy as
              liking a post, and messaging feels like sharing secrets with your
              BFF. Join us for endless laughter, love, and maybe even a few too
              many selfies! 🤳😄
            </p>
            <div className="mt-6">
              <span className="text-gray-600">Don&apos;t have an account?</span>
              <Link
                to="/register"
                className="ml-2 text-blue-500 hover:text-blue-700 font-semibold"
              >
                Register
              </Link>
              {/* <button className="ml-2 text-blue-500 hover:text-blue-700 font-semibold">
                Register
              </button> */}
            </div>
          </div>

          <div className="lg:w-1/2 p-6 bg-gray-100 rounded-lg mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <form className="mt-6">
              <input
                name="username"
                placeholder="Enter Username"
                autoComplete="on"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="password"
                placeholder="Enter Password"
                autoComplete="on"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
