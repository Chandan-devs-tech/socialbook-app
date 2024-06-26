const Comments = () => {
  const currentUser = "https://www.w3schools.com/howto/img_avatar.png";
  //temporary data
  const comments = [
    {
      id: 1,
      desc: "This is a comment",
      name: "John Doe",
      userId: 1,
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      desc: "This is a comment",
      name: "John Doe",
      userId: 1,
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 3,
      desc: "This is a comment",
      name: "John Doe",
      userId: 1,
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center gap-5 mt-5 mb-5">
        <img
          src={currentUser}
          alt="user-img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="write a comment"
          className="flex-[5] p-2 border-none border-transparent text-slate-500"
        />
        <button className="border-none bg-blue-500 text-white p-2 cursor-pointer rounded-sm">
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex items-center mt-7 mb-7 justify-between gap-5"
        >
          <img
            src={comment.profilePic}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 items-start flex-[5]">
            <span className="font-semibold">{comment.name}</span>
            <p className="text-slate-500 text-md">{comment.desc}</p>
          </div>
          <span className="text-slate-500 text-xs flex-[1] self-center">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
