const Stories = () => {
  const currentUser = {
    id: 1,
    name: "Ria",
    profilePic:
      "https://img.freepik.com/free-photo/medium-shot-smiley-woman-posing_23-2149523812.jpg?t=st=1714417956~exp=1714421556~hmac=a2a29a6d53de55db160055dfb15ad016bb391cf8135f22a9da95217889f29158&w=360",
  };
  const stories = [
    {
      id: 1,
      name: "Story 1",
      img: "https://images.pexels.com/photos/10845717/pexels-photo-10845717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Story 2",
      img: "https://images.pexels.com/photos/10845717/pexels-photo-10845717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Story 3",
      img: "https://images.pexels.com/photos/10845717/pexels-photo-10845717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="flex gap-2 p-3 relative">
      <div>
        <img
          src={currentUser.profilePic}
          alt={currentUser.name}
          className="w-36 rounded-md"
        />
        <p className="absolute font-bold top-52 ml-2 text-white">
          {currentUser.name}
        </p>
        <button className="bg-blue-500 text-white w-7 h-7 rounded-full flex justify-center items-center font-extralight text-xl absolute top-44 ml-1">
          +
        </button>
      </div>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <img src={story.img} alt={story.name} className="w-36 rounded-md" />
            <p className="absolute font-bold top-52 ml-2 text-white">
              {story.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
