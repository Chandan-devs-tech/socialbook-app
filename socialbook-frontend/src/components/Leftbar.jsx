//friends
import friends from "../assets/leftbar-icons/friends.png";
//group
import group from "../assets/leftbar-icons/groups.png";
//market
import market from "../assets/leftbar-icons/markets.png";
//video
import videos from "../assets/leftbar-icons/videos.png";
// memories
import memories from "../assets/leftbar-icons/memories.png";
//user
import user from "../assets/avatar.jpg";
//events
import events from "../assets/leftbar-icons/events.png";
//gaming
import gaming from "../assets/leftbar-icons/gaming.png";
//gallery
import gallery from "../assets/leftbar-icons/gallery.png";
//message
import message from "../assets/leftbar-icons/messages.png";
//fund
import fund from "../assets/leftbar-icons/funds.png";
//tutorials
import tutorials from "../assets/leftbar-icons/tutorial.png";
//courses
import courses from "../assets/leftbar-icons/courses.png";
//watch
import watch from "../assets/leftbar-icons/watching.png";

const Leftbar = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 72px)",
        position: "sticky",
        overflow: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        top: "72px",
      }}
      className="border-r-2 border-slate-200  flex-[2] mxs:hidden "
    >
      <div>
        <div className="menu p-4 ">
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all ease-out  items-center gap-4">
            <img src={user} alt="user" className="w-10 rounded-md" />
            <span>Rob</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={friends} alt="friends" className="w-10 rounded-md" />
            <span>Friends</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={group} alt="groups" className="w-10 rounded-md" />
            <span>Groups</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={market} alt="market" className="w-10 rounded-md" />
            <span>Marketplace</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={watch} alt="watch" className="w-10 rounded-md" />
            <span>Watch</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={memories} alt="memories" className="w-10 rounded-md" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu p-4">
          <span className="text-slate-500">Your shortcuts</span>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={events} alt="events" className="w-10 rounded-md" />
            <span>Events</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={gaming} alt="gaming" className="w-10 rounded-md" />
            <span>Gaming</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={gallery} alt="gallery" className="w-10 rounded-md" />
            <span>Gallery</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={videos} alt="videos" className="w-10 rounded-md" />
            <span>Videos</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={message} alt="messages" className="w-10 rounded-md" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu p-4">
          <span className="text-slate-500">Others</span>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={tutorials} alt="tutorials" className="w-10 rounded-md" />
            <span>Tutorials</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={courses} alt="courses" className="w-10 rounded-md" />
            <span>Courses</span>
          </div>
          <div className="p-2 flex cursor-pointer hover:bg-slate-500 hover:text-white font-bold rounded-md transition-all   items-center gap-4 ease-out ">
            <img src={fund} alt="fund" className="w-10 rounded-md" />
            <span>Fundraiser</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
