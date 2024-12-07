function ContactUs() {
  return (
    <>
      <div
        className=" bg-gradient-to-r from-green-100 via-green-300 to bg-green-100 h-screen w-screen
      pt-20"
      >
        <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          {/* Contact Information Section */}
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">
              Share Your Concerns
            </h1>
            <p className="text-sm text-gray-500 mt-6">
              We would love to hear your concerns! Please fill out the form, and
              we’ll get in touch with you shortly.
            </p>
            <ul className="mt-6">
              <li className="flex gap-4 items-center">
                <p className="text-gray-600">Seenlasht, Chitral, Pakistan</p>
              </li>
              <li className="flex gap-4 items-center mt-4">
                <p className="text-gray-600">+92 301 8969 409</p>
              </li>
              <li className="flex gap-4 items-center mt-4">
                <p className="text-gray-600">imaduddin0010@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div>
            <form>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-3 rounded-lg "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 rounded-lg "
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg mt-4 "
              />
              <textarea
                placeholder="Message"
                className="w-full border p-3 rounded-lg mt-4 "
              ></textarea>
              <button
                type="submit"
                className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
