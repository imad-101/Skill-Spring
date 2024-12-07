import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 pb-12 overflow-y-hidden h-screen"
        style={{ minHeight: 700 }}
      >
        <nav className="w-full border-b ">
          <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between ">
            <div aria-label="Home. logo" role="img">
              <img className="w-12 md:w-20 ml-12" src="logo.png" alt="logo " />
            </div>
            <div>
              <div id="menu" className={" md:block lg:block "}>
                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                    <a className=" hover:text-gray-700" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="#learn">Learn</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="recources">Recourses</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="account">
              <button className=" lg:text-lg lg:font-bold  hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-black text-black px-4 sm:px-8 py-1 sm:py-3 text-sm">
                Account
              </button>
            </Link>
          </div>
        </nav>
        <div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-700 font-black leading-10 md:leading-10">
                <span className="text-green-700">Freelancing</span> &
                <span className="text-green-700"> Learning </span> Platform For
                The Students Of
                <span className="text-green-800 underline underline-offset-8 ml-3">
                  Chitral
                </span>
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A Website Created By The Students Of AKHSS Chitral , to help
                students in Chitral to learn and monetize indemanding skills
              </p>
            </div>
            <div className="flex justify-center items-center">
              <a href="#services">
                <button className="ml-4  bg-green-900 transition duration-150 ease-in-out lg:text-xl lg:font-bold hover:bg-green-950 rounded  text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
                  Explore
                </button>
              </a>

              <a href="account">
                <button className="ml-4  bg-transparent transition duration-150 ease-in-out lg:text-xl lg:font-bold hover:bg-gray-200 rounded border border-black text-black px-4 sm:px-10 py-2 sm:py-4 text-sm">
                  Get Started
                </button>
              </a>
              <img
                src="img4.png"
                alt=""
                className="w-80 opacity-40 absolute left-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
