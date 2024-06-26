import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import userImg from "../assets/avatar.jpg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 dark:bg-gray-800 dark:text-white text-slate-800 bg-white sticky top-0">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-white">
          SocialBook
        </Link>
        <HomeRoundedIcon className="text-2xl" />

        <GridViewRoundedIcon className="text-2xl" />
        <button onClick={handleTheme}>
          {theme === "light" ? (
            <DarkModeRoundedIcon className="text-2xl" />
          ) : (
            <LightModeIcon className="text-2xl" />
          )}
        </button>
        <div className="flex items-center bg-gray-700 rounded-lg px-3 py-1 ml-4">
          <SearchRoundedIcon className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white focus:outline-none ml-2 mxs:hidden"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 mxs:hidden">
        <AccountCircleRoundedIcon className="text-2xl" />
        <EmailRoundedIcon className="text-2xl" />
        <NotificationsRoundedIcon className="text-2xl" />

        <div className="flex items-center space-x-2">
          <img
            src={userImg}
            alt="user-img"
            className="w-10 h-10 rounded-full"
          />
          <span>Rob</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
