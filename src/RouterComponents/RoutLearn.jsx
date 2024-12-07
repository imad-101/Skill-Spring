import { FaRegFileVideo, FaVideo, FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";

function RoutLearn() {
  const [option, setOption] = useState(null);
  const [state, setState] = useState(1);

  function handleOpt(opt) {
    setOption(opt);
    setState(0);
  }

  function Cards({ src, title }) {
    return (
      <div className="w-[25rem] shadow-md">
        <div className="Khowar bg-green-100 text-center rounded-xl">
          <video
            controls
            poster=""
            className="w-[25rem] mx-auto pb-5 rounded-xl"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="pt-2 pb-4 text-2xl">{title}</h1>
        </div>
      </div>
    );
  }

  console.log(option);
  return (
    <>
      <div className="bg-green-100 h-screen">
        {state == 1 && (
          <div className="flex gap-16 justify-center pt-10">
            <button
              onClick={() => handleOpt("option-1")}
              className="flex items-center gap-2 px-32 py-24 rounded-md bg-blue-500 text-white transition-transform transform hover:scale-105 hover:bg-blue-600"
            >
              <FaRegFileVideo className="w-6 h-6" />
              Recorded Courses
            </button>

            <button
              onClick={() => handleOpt("option-2")}
              className="flex items-center gap-2  px-32 py-24 rounded-md bg-green-500 text-white transition-transform transform hover:scale-105 hover:bg-green-600"
            >
              <FaVideo className="w-6 h-6" />
              Live Courses
            </button>
            <a href="services">
              <button className="flex items-center gap-2  px-32 py-24 rounded-md bg-purple-500 text-white transition-transform transform hover:scale-105 hover:bg-purple-600">
                <FaChalkboardTeacher className="w-6 h-6" />
                Hire a teacher
              </button>
            </a>
          </div>
        )}
        {option == "option-1" && (
          <>
            <div className=" mx-20 bg-green-50">
              <h1 className="text-3xl text-gray-700 font-bold text-center py-7">
                Khowar
              </h1>
              <div className="grid grid-cols-3 items-center">
                <Cards
                  title="Pixelation ( Khowar Language )"
                  src={"video.mp4"}
                />
                <Cards title="Pixelation" src={"video.mp4"} />
                <Cards title="Pixelation" src={"video.mp4"} />
              </div>
            </div>
            <div className=" mx-20 bg-green-50">
              <h1 className="text-3xl text-gray-700 font-bold text-center py-7">
                Urdu Language
              </h1>
              <div className="grid grid-cols-3 items-center">
                <Cards title="Pixelation ( Urudu Language)" src={"video.mp4"} />
                <Cards title="Pixelation" src={"video.mp4"} />
                <Cards title="Pixelation" src={"video.mp4"} />
              </div>
            </div>
          </>
        )}
        {option == "option-2" && (
          <>
            <div className="course1">
              <h1 className="text-center py-7 text-3xl text-gray-700 font-bold">
                Web Development
              </h1>
              <div className="grid grid-cols-3 gap-5 mx-10 ml-16">
                <div className=" ">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="course2">
              <h1 className="text-center py-7 text-3xl text-gray-700 font-bold">
                Graphic Designing
              </h1>
              <div className="grid grid-cols-3 gap-5 mx-10 ml-16">
                <div className=" ">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="course3">
              <h1 className="text-center py-7 text-3xl text-gray-700 font-bold">
                Pixelation
              </h1>
              <div className="grid grid-cols-3 gap-5 mx-10 ml-16">
                <div className=" ">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="">
                  <iframe
                    width="400"
                    height="250"
                    src="https://www.youtube.com/embed/4WjtQjPQGIs?si=WREP_0KejUQHATEN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RoutLearn;
