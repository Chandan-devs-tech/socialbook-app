import Post from "./Post";

const Posts = () => {
  // temporary data
  const posts = [
    {
      id: 1,
      name: "Camilla",
      userId: 1,
      profilePic:
        "https://img.freepik.com/free-photo/view-woman-holding-cup-coffee_23-2150698759.jpg?t=st=1714417591~exp=1714421191~hmac=bcffe1f25066ac3e7f1fe2976ef910af816110e2b9b10430721da77e6a17aa84&w=740",
      desc: "A beautiful sunset in the Grand Canyon, Arizona, USA",
      img: "https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Yasmin",
      userId: 2,
      profilePic:
        "https://img.freepik.com/free-photo/medium-shot-woman-posing-with-flowers_23-2150725577.jpg?t=st=1714425469~exp=1714429069~hmac=3678219dddf2b265cd99dfda0815d9a9f823a33427bb9555a2a4e0340a15064c&w=996",
      desc: "Muslim people visiting kabba a scared place in Mecca, Saudi Arabia",
      img: "https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Zainab",
      userId: 3,
      profilePic:
        "https://img.freepik.com/free-photo/medium-shot-woman-posing-with-flowers_23-2150725596.jpg?t=st=1714427188~exp=1714430788~hmac=27bd52415a2e7194d20e75634f503ed42631b0dedb5ec6725c487b78113666c3&w=996",
      desc: "Masjid al-Haram in Mecca, Saudi Arabia",
      img: "https://images.pexels.com/photos/5798526/pexels-photo-5798526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Safiya",
      userId: 4,
      profilePic:
        "https://img.freepik.com/premium-photo/young-muslim-woman-woman-hijab-blurred-background-with-car_126267-19405.jpg?w=1060",
      desc: "Taj Mahal and the Four Minaret Mosque in Agra, India",
      img: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
