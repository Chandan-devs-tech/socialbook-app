function Rightbar() {
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
      className="rightbar flex-[4] mxs:hidden "
    >
      <div className="container ">
        <div className="item p-4 m-2 shadow-slate-300 shadow-sm rounded-md">
          <span className="text-slate-500">Suggestions for you</span>
          <div className="user flex justify-between ">
            <div className="userInfo flex p-2 gap-2 items-center">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/beautiful-young-woman-with-long-brown-hair-white-blouse-3d-rendering_1142-41472.jpg?t=st=1714366556~exp=1714370156~hmac=ae51811b10c19ed710ce4ca115c748c8da00386d03780bb7b0f536c85007ebd7&w=740"
                alt=""
              />
              <span className="font-semibold">Natalia</span>
            </div>
            <div className="followDismiss flex gap-3 items-center">
              <button className="cursor-pointer px-3 py-1 hover:bg-slate-600 h-fit text-sm font-bold bg-slate-800 rounded-md  text-white">
                Follow
              </button>
              <button className="cursor-pointer px-3 py-1 hover:bg-red-300   h-fit text-sm font-bold  hover:text-slate-900 bg-red-400   rounded-md text-white">
                Dismiss
              </button>
            </div>
          </div>
          <div className="user flex justify-between mt-2">
            <div className="userInfo flex p-2 gap-2 items-center">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/view-3d-happy-woman-with-mouth-wide-open_23-2150709950.jpg?t=st=1714366677~exp=1714370277~hmac=34f32277dbb874c66fd64ef2ccdd13953c05b9cd72f2ad0137a9d3d1904e0b06&w=740"
                alt=""
              />
              <span className="font-semibold">Mariana</span>
            </div>
            <div className="followDismiss flex gap-3 items-center">
              <button className="cursor-pointer  px-3 py-1 h-fit text-sm font-bold hover:bg-slate-600 bg-slate-800 rounded-md  text-white">
                Follow
              </button>
              <button className="cursor-pointer  px-3 py-1 h-fit text-sm font-bold hover:bg-red-300  hover:text-slate-900 bg-red-400   rounded-md text-white">
                Dismiss
              </button>
            </div>
          </div>
        </div>
        <div className="item p-4 m-2 shadow-slate-300 shadow-sm rounded-md ">
          <span className="text-slate-500">Latest Activities</span>
          <div className="user flex items-center justify-between mt-1 ">
            <div className="userInfo flex p-2 gap-1 items-center ">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/portrait-beautiful-girl-pink-helmet-3d-rendering_1142-40639.jpg?t=st=1714366636~exp=1714370236~hmac=53756b0cab5c71f4f3b638e671515c8d96f87ab7acd183ed375191907e4b6b62&w=740"
                alt=""
              />
              <span className="font-semibold">Amara</span>
              <span className="text-slate-500 text-md">
                changed their cover picture.
              </span>
            </div>
            <div className="followDismiss flex gap-2 text-slate-500">
              <span className="text-xs">1 min ago</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mt-1 ">
            <div className="userInfo flex p-2 gap-1 items-center ">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/close-up-beautiful-girl-portrait-near-tree_23-2150799843.jpg?t=st=1714367111~exp=1714370711~hmac=cb2a3f79945574683cb78141b47a1d63d42123240cc3a41b764c69cb35f10795&w=740"
                alt=""
              />
              <span className="font-semibold">Liliana</span>
              <span className="text-slate-500 text-md">liked a post.</span>
            </div>
            <div className="followDismiss flex gap-2 text-slate-500 text-md">
              <span className="text-xs">2 min ago</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mt-1 ">
            <div className="userInfo flex p-2 gap-1 items-center ">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/view-woman-holding-cup-coffee_23-2150698759.jpg?t=st=1714367258~exp=1714370858~hmac=fd25c7886c9eae224e29bcac549639ae3dff7e80dfa772759cba49ec8af80c78&w=740"
                alt=""
              />
              <span className="font-semibold">Camilla</span>
              <span className="text-slate-500 text-md">liked a comment.</span>
            </div>
            <div className="followDismiss flex gap-2 text-slate-500 text-md">
              <span className="text-xs">2 min ago</span>
            </div>
          </div>
          <div className="user flex items-center justify-between mt-1 ">
            <div className="userInfo flex p-2 gap-1 items-center ">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="https://img.freepik.com/free-photo/medium-shot-woman-working-as-lawyer_23-2151053999.jpg?t=st=1714367353~exp=1714370953~hmac=5b66410919ff58de8bf4f1f1b970e681e3dd8cae6f2025e6a8ba9299fa85bfb6&w=740"
                alt=""
              />
              <span className="font-semibold">Valentina</span>
              <span className="text-slate-500 text-md">
                posted a new photo.
              </span>
            </div>
            <div className="followDismiss flex gap-2 text-slate-500 text-md">
              <span className="text-xs">2 min ago</span>
            </div>
          </div>
        </div>
        <div className="item p-4 m-2 shadow-slate-300 shadow-sm rounded-md">
          <span className="text-slate-500">Online Friends</span>
          <div>
            <div className="userInfo flex p-2 gap-2 items-center">
              <div className="relative">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full object-cover "
                  src="https://img.freepik.com/free-photo/portrait-beautiful-girl-baseball-cap-3d-rendering_1142-40996.jpg?t=st=1714366295~exp=1714369895~hmac=63c9edfe077a7026cb26600b2a12fa1dac910dd9ab3d1322d78993c1db236c4f&w=740"
                  alt=""
                />
                <div className="bg-green-400 w-3 h-3 rounded-full absolute  top-0 right-0 "></div>
              </div>
              <span className="font-semibold">Sophia</span>
            </div>
          </div>
          <div>
            <div className="userInfo flex p-2 gap-2 items-center">
              <div className="relative">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full object-cover "
                  src="https://img.freepik.com/free-photo/3d-illustration-cute-little-girl-city-night_1142-40727.jpg?t=st=1714366258~exp=1714369858~hmac=33c1d2e9d86748a761bc58a4b130e287d77f5f6526d5e02da8eab50fc3f3daf9&w=740"
                  alt=""
                />
                <div className="bg-green-400 w-3 h-3 rounded-full absolute  top-0 right-0 "></div>
              </div>
              <span className="font-semibold">Amelia</span>
            </div>
          </div>
          <div>
            <div className="userInfo flex p-2 gap-2 items-center">
              <div className="relative">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full object-cover "
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-glasses-white-shirt_1142-42771.jpg?t=st=1714366230~exp=1714369830~hmac=12c2d86738229d2530701b2e28bc2edee05d4cf2e318d0f161397798d1d7613d&w=740"
                  alt=""
                />
                <div className="bg-green-400 w-3 h-3 rounded-full absolute  top-0 right-0 "></div>
              </div>
              <span className="font-semibold">Gabriella</span>
            </div>
          </div>
          <div>
            <div className="userInfo flex p-2 gap-2 items-center">
              <div className="relative">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full object-cover "
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?t=st=1714366192~exp=1714369792~hmac=6926efb2d095f31bd27549c94d86e877f3ffa8b8d14b69649ba84d8b73f1af8f&w=740"
                  alt=""
                />
                <div className="bg-green-400 w-3 h-3 rounded-full absolute  top-0 right-0 "></div>
              </div>
              <span className="font-semibold">Juliette</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
