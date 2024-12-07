import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
function Services() {
  return (
    <section
      className="py-12 bg-green-950 text-gray-100 sm:py-12 lg:py-16"
      id="services"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Explore Gigs And Services
          </h2>
          <p className="mb-4">
            We are providing opportunities for students to sell their services
            through our platform
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <HiOutlineComputerDesktop className="text-5xl text-black" />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Web Development
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Get a professional looking website for your brand / business.
                  Hire Professional freelancers , ready to deliver their
                  services
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <PiChalkboardTeacherDuotone className="text-5xl text-black" />
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Hire A Tutour
              </h3>
              <p className="mt-6 text-base text-gray-600">
                Explore gigs from professional teachers and educator in any
                subject, Hire a personal tutour or join a group class
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <GrAnnounce className="text-5xl text-black" />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Marketing
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Explore gigs related to digital and offline marketting to help
                  you business grow both offline and online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="services">
        <h2 className="text-right mr-48 mt-6 text-white font-bold">
          Browse More <span className="ml-2">&#8594;</span>
        </h2>
      </a>

      {/* ------------------------------------------------------------------------ */}
    </section>
  );
}

export default Services;
