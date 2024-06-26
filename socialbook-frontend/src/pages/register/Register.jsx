import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register flex justify-center items-center min-h-screen bg-custom-bg">
      <div className="w-4/5 lg:w-2/3  bg-white shadow-xl rounded-lg p-8  msm:p-6 mxs:p-0 mxs:w-full msm:mx-4 ">
        <div className="flex  md:flex-row flex-col-reverse  lg:text-xl justify-between">
          <div className="lg:w-1/2  p-6  bg-gray-100 rounded-lg  lg:mt-0 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>
            <form className="mt-6">
              <input
                name="name"
                placeholder="Enter Name"
                type="text"
                autoComplete="on"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="username"
                placeholder="Enter Username"
                type="text"
                autoComplete="on"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              />
              <input
                name="username"
                placeholder="Enter Email"
                type="text"
                autoComplete="on"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              />
              <input
                name="password"
                placeholder="Enter Password"
                type="password"
                autoComplete="on"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
              >
                Create Account
              </button>
            </form>
          </div>

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
              <span className="text-gray-600">Already have an account?</span>
              <Link
                to="/login"
                className="ml-2 text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
              {/* <button className="ml-2 text-blue-500 hover:text-blue-700 font-semibold">
                Login
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
