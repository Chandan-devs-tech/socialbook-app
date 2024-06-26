import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  //temporary data
  const liked = false;
  return (
    <div className="shadow-slate-300 shadow-sm rounded-md m-2">
      <div className="p-5">
        <div className="user flex items-center justify-between">
          <div className="userInfo flex gap-5">
            <img
              src={post.profilePic}
              alt="post-img"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <Link to={`/profile/${post.userId}`} className="link">
                <span className="font-semibold">{post.name}</span>
              </Link>
              <span className="text-slate-500 text-xs">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content mt-5 mb-5">
          <p className="text-slate-500 text-md">{post.desc}</p>
          <img
            src={post.img}
            alt=""
            className="w-full max-h-fit object-cover mt-5 rounded-sm"
          />
        </div>
        <div className="info flex items-center gap-5">
          <div className=" flex items-center gap-2 cursor-pointer text-xs text-slate-500">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className=" flex items-center gap-2 cursor-pointer text-xs text-slate-500"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className=" flex items-center gap-2 cursor-pointer text-xs text-slate-500">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
