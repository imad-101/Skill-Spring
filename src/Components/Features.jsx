function Features() {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-16 mb-28">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Features
      </h2>
      <p className="mb-12 text-lg text-gray-500">
        Here is a few of the features of our website
      </p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-700 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-700 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Localized Focus for Chitral
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Designed specifically for the students of Chitral, our
                  platform takes into account local needs and challenges. It’s a
                  unique space to bridge gaps in education and professional
                  development in the region.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-700 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-orange-700 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Resource Sharing
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-orange-700 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  View and download educational resources such as notes, past
                  papers, presentations, and more. This feature makes learning
                  collaborative and accessible for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-900 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-900 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Easy-to-Use Interface
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Navigating the platform is simple and intuitive, with a clean
                  design that caters to all tech skill levels. Whether you’re
                  posting a gig, joining a discussion, or browsing resources,
                  you’ll find it effortless and enjoyable.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-700 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-700 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Learn Anytime, Anywhere
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Understanding the limited internet connectivity in some areas
                  of Chitral, the platform offers offline access to selected
                  resources and courses, ensuring uninterrupted learning for all
                  students.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-950 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-950 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Mentorship Programs
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Connect with experienced mentors in Chitral or beyond. Whether
                  you need career advice, academic guidance, or project
                  feedback, this feature fosters meaningful relationships to
                  support student growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
