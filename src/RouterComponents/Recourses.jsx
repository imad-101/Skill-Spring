import { PiReadCvLogoLight } from "react-icons/pi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

function Recourses() {
  return (
    <div className="bg-green-50 h-screen">
      <h1 className="text-3xl font-bold text-center pt-16 pb-10 text-gray-600">
        Free Recources For Our Users
      </h1>
      <div>
        <div className="container flex justify-around mt-10 ">
          <a href="https://imad-cv-builder.netlify.app/ black" target="blank">
            <div className="Cv bg-green-100 w-[25rem] rounded-xl hover:transform hover:scale-105 transition-all shadow-xl h-72 pt-3">
              <div className="flex gap-8 justify-center mt-10 items-center">
                <PiReadCvLogoLight className="text-center text-5xl" />
                <h1 className=" text-4xl font-bold ">Cv Maker</h1>
              </div>
              <p className="px-11 py-5 text-gray-700">
                We have created a free Cv maker app for our users to make
                visually appealing and strong cv that makes them stand out in
                any job application.
              </p>
            </div>
          </a>
          <a href="https://sites.google.com/view/ifponline/education">
            <div className="Cv bg-green-100 w-[25rem] rounded-xl hover:transform hover:scale-105 transition-all shadow-xl h-72 pt-3">
              <div className="flex gap-8 justify-center mt-10 items-center">
                <CgNotes className="text-center text-5xl" />
                <h1 className=" text-4xl font-bold ">Notes / Books</h1>
              </div>
              <p className="px-11 py-5 text-gray-700">
                We have compiled notes and important learning recources for our
                users specially students to access for completely free.
              </p>
            </div>
          </a>
          <a href="tips">
            <div className="Cv bg-green-100 w-[25rem] rounded-xl hover:transform hover:scale-105 transition-all shadow-xl h-72 pt-3 ">
              <div className="flex gap-8 justify-center mt-10 items-center">
                <MdOutlineTipsAndUpdates className="text-center text-5xl" />
                <h1 className=" text-4xl font-bold ">Interview Tips</h1>
              </div>
              <p className="px-11 py-5 text-gray-700">
                We help our users specially those applying for jobs and part
                time jobs to get the best interview tips from experts.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recourses;
