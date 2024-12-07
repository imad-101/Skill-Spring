function Learn() {
  return (
    <div className="bg-[#4D1727] my-16 mx-16 rounded-xl py-16 px-16" id="learn">
      <h2 className="text-3xl text-white font-bold mb-8text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10 mb-10">
        Learn Skills
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="pixel.jpg"
                alt="pixelation"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Course
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">Pixelation</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-900 font-bold text-lg">Free</span>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                Enroll
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="web.png"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Course
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Web Development
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-900 font-bold text-lg"> Rs 2500</span>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                Enroll
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="video.jpg"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Course
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Video Editing
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-900 font-bold text-lg">Free</span>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="learn">
        <h2 className="text-right mr-9 mt-6 text-white font-bold">
          Browse More <span className="ml-2">&#8594;</span>
        </h2>
      </a>
    </div>
  );
}

export default Learn;
