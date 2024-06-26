import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import profileImg from "../../assets/avatar.jpg";
import Posts from "../../components/Posts";

const Profile = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 72px)",
        position: "sticky",
        overflow: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        top: "72px",
        backgroundColor: "#f6f3f3",
      }}
    >
      <div className="images w-full h-48 relative">
        <img
          src="https://img.freepik.com/free-photo/busy-programmer-typing-e-mails-illuminated-laptop-generative-ai_188544-32077.jpg?t=st=1714436767~exp=1714440367~hmac=79dbda0087d2acde6c0dd92b2a712e7355d8c5065b6724bfcd9094fb6d99cc4e&w=1060"
          alt="cover-img"
          className="w-full h-full object-cover"
        />
        <img
          src={profileImg}
          alt="profile-img"
          className="w-36 h-36 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-14 border-4 border-white"
        />
      </div>
      <div className="profileContainer m-8 h-40 flex items-center justify-between">
        <div className="uInfo flex items-center justify-between w-full">
          <div className="left flex flex-1 gap-2">
            {/* GitHub Icon */}
            <IconButton
              href=""
              target="_blank"
              aria-label="GitHub"
              style={{ width: "24px", height: "24px" }}
            >
              <GitHubIcon style={{ fontSize: "25px" }} />
            </IconButton>

            {/* LinkedIn Icon */}
            <IconButton
              href=""
              target="_blank"
              aria-label="LinkedIn"
              style={{ width: "24px", height: "24px" }}
            >
              <LinkedInIcon style={{ fontSize: "25px" }} />
            </IconButton>
            {/* Twitter Icon */}
            <IconButton
              href=""
              target="_blank"
              aria-label="Twitter"
              style={{ width: "24px", height: "24px" }}
            >
              <TwitterIcon style={{ fontSize: "25px" }} />
            </IconButton>

            {/* Medium Icon */}
            <IconButton
              href=""
              target="_blank"
              aria-label="Medium"
              style={{ width: "24px", height: "24px" }}
            >
              <RssFeedIcon style={{ fontSize: "25px" }} />
            </IconButton>

            {/* Instagram Icon */}
            <IconButton
              href=""
              target="_blank"
              aria-label="Instagram"
              style={{ width: "24px", height: "24px" }}
            >
              <InstagramIcon style={{ fontSize: "25px" }} />
            </IconButton>
          </div>
          <div className="center flex flex-[2] flex-col items-center gap-3">
            <span className="font-semibold text-2xl text-black">
              Chandan Gupta
            </span>
            <div className="info flex items-center justify-around w-full gap-6">
              <div className="item">
                <IconButton
                  href={`https://www.google.com/maps?q=25.30035627903061, 82.98026895435358`}
                  target="_blank"
                  aria-label="Google Maps"
                >
                  <PlaceIcon style={{ color: "#585858" }} />
                </IconButton>
                <span className="text-sm text-slate-500">IN</span>
              </div>
              <div className="item">
                <IconButton
                  href=""
                  target="_blank"
                  aria-label="Protfolio"
                >
                  <LanguageIcon style={{ color: "#585858" }} />
                </IconButton>
                <span className="text-sm text-slate-500">Rob.dev</span>
              </div>
            </div>
            <button className="bg-blue-700 text-white rounded-md px-4 py-1">
              Follow
            </button>
          </div>
          <div className="right flex flex-1 items-center justify-end">
            <IconButton
              href="mailto:chandangupta.devs@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <EmailOutlinedIcon style={{ color: "#585858" }} />
            </IconButton>
            <MoreVertIcon style={{ color: "#585858" }} />
          </div>
        </div>
      </div>
      <div className="postsContainer">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
