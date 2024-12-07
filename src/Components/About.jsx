function About() {
  return (
    <>
      <section id="intro-video" className="text-center  pb-16">
        <video
          controls
          poster="image.png"
          className="w-[70rem] mx-auto rounded-md shadow-lg"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="bg-[#003161] mx-16 rounded-xl my-16" id="about">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Welcome to Skill Spring, an initiative created by the students
                of AKHSS Chitral. This platform is designed to connect students
                with valuable opportunities to learn, teach, and collaborate.
                Whether you are looking for part-time jobs, sharing your
                knowledge as a tutor, or exploring educational resources, our
                website aims to provide the tools to help you succeed. We
                believe in the power of community and innovation, and we hope
                this space fosters growth, learning, and connection for all
                students in Chitral.
              </p>
              <div className="mt-8">
                <a
                  href="sepabout"
                  className="text-gray-200 hover:text-gray-700font-medium"
                >
                  Our Team <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="mainimg.jpeg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
