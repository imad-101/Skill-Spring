import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Handle account creation (registration)
  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    // Save user to local storage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    setIsLogin(true); // Switch to login form
  };

  // Handle login functionality
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after login
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="font-[sans-serif] w-full px-96 flex items-center mx-auto md:h-screen p-4 bg-green-50">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-green-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">
              {isLogin ? "Login to Your Account" : "Create Your Account"}
            </h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
              {isLogin
                ? "Please login to access your account."
                : "Welcome to our registration page! Get started by creating your account."}
            </p>
          </div>
        </div>

        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">
              {isLogin ? "Login" : "Create an Account"}
            </h3>
          </div>

          <div className="space-y-6">
            {!isLogin && (
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="!mt-12">
            <button
              type="button"
              className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-green-800 hover:bg-green-900"
              onClick={isLogin ? handleLogin : handleRegister}
            >
              {isLogin ? "Login" : "Create an Account"}
            </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-green-900 font-semibold hover:underline ml-1"
                  onClick={() => setIsLogin(false)}
                >
                  Create one here
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-green-900 font-semibold hover:underline ml-1"
                  onClick={() => setIsLogin(true)}
                >
                  Login here
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Account;
