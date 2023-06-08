import React from "react";
const Adminlogin = () => {
  const imageUrl =
    "https://cdn.pixabay.com/photo/2023/05/09/20/36/ai-generated-7982424_1280.jpg";
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="my-52 flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] h-[670px] md:h-[460px] m-2 bg-gray-500 opacity-90">
          <div
            className="h-[100%] w-full md:w-3/4  bg-center  bg-cover rounded-full"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
          </div>
          <div className="h-[90%] w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-gray-100">Admin Login</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="email"
                  placeholder="Email Id"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Password"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
                login
              </button>
            </div>
            <div className="text-center my-6">
              <a
                href="#"
                className="text-center text-md font-medium text-gray-200 hover:text-blue-300 hover:underline"
              >
                Forgot Password ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
