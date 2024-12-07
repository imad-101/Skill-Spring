import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/"); // Redirect to the home page
  };

  const handlePostGig = () => {
    navigate("/post-gig"); // Redirect to the post gig page (you can create this route)
  };

  return (
    <div className="font-[sans-serif] w-full px-96 flex items-center mx-auto md:h-screen p-4 bg-green-100">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-green-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">
              Welcome to Your Dashboard
            </h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
              Choose an option to proceed.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 w-full py-6 px-6 sm:px-16 space-y-6">
          <button
            onClick={handlePostGig}
            className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-green-800 hover:bg-green-900"
          >
            Post a Gig
          </button>

          <button
            onClick={handleBrowse}
            className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-green-800 hover:bg-green-900"
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
