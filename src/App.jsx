import React from "react";
import { useState } from "react";


const App = () => {
  const [like, setLike] = useState(false);

  // like and dislike function
  const likeAndDislike = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center bg-neutral-900">
        <div className=" w-[350px] h-[433px]  bg-gray-200 shadow-md shadow-neutral-500  rounded-lg">
          <div>
            {/* user and name */}
            <div className="user flex p-3 items-center gap-3 rounded cursor-pointer">
              <div className="text-[20px]">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <p>its__nasim__14</p>
            </div>

            <div>
              {/* image-section */}
              <div className="div">
                <img
                  src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww'
                  alt=""
                  className="h-[320px] w-[100%] cursor-pointer"
                  onDoubleClick={likeAndDislike}
                />
              </div>

              {/* bottom-section*/}
              <div className="bottom  flex justify-between items-center px-3">
                {/* icom */}
                <div className="flex gap-4 items-center justify-start py-4 cursor-pointer ">
                  {/* <i class="fa-regular fa-heart text-2xl"></i> */}

                  {!like ? (
                    <button onClick={likeAndDislike}>
                      <i class="fa-regular fa-heart text-2xl"></i>
                    </button>
                  ) : (
                    <button onClick={likeAndDislike} className=" text-[red] ">
                      <i class="fa-regular fa-heart text-2xl"></i>
                    </button>
                  )}
                  <i class="fa-regular fa-comment-dots text-2xl"></i>
                  <i class="fa-solid fa-share-nodes text-xl"></i>
                </div>

                <div className="text-[22px] cursor-pointer">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
