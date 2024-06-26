import Stories from "../../components/Stories";
import Posts from "../../components/Posts";

const Home = () => {
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
      className="rightbar flex-[4] "
    >
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
