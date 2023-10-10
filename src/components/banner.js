const Banner = () => {
  return (
    <div className="relative sm:mt-0 mt-16">
      <div >
        <img
          className="w-full max-h-[80vh] object-cover "
          src="/images/banner.jpg"
        ></img>
      </div>
      <div className=" 2xl:container mx-auto absolute inset-0  flex flex-col justify-center items-center text-white mt-4">
        <h1 className="sm:text-7xl text-center sm:px-60 px-16 items-center font-light "> here’s a teeny-weeny glimpse of our work. what’s coming later is </h1>
        <h1 className="sm:text-8xl text-2xl space-x-16 sm:mt-16 mt-6">
            <span className="text-blue-500 font-semibold">Even  </span> 
            <span className="text-red-500 font-semibold">greater</span>
       </h1>
      </div>
    </div>
  );
};

export default Banner;
