import { FaGoogle, FaGithub } from 'react-icons/fa';



async function googleAuthentication() {
  const baseURL = import.meta.env.VITE_BACKEND_URL
    window.location.href = `${baseURL}/auth/google`;
}

const AdminLogin = () => {
  
  return (
    <div className="h-full w-full p-10 grid grid-cols-1 lg:grid-cols-2 bg-gray-900 text-zinc-200">
        <div className=" overflow-hidden border-none rounded-lg mx-4 my-2 hidden lg:block">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fill blur-[1.5px]" alt="loginHeroImage"></img>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-white text-3xl font-bold mb-6">Create an account</h2>
            <p className="text-gray-400 mb-4">
              Already have an account? <a href="#" className="text-purple-400 hover:underline">Log in</a>
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12H9m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-400">
                  I agree to the <a href="#" className="text-purple-400 hover:underline">Terms & Conditions</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Create account
              </button>
            </form>
            <div className="flex items-center justify-between mt-6">
              <span className="border-b border-gray-600 w-full"></span>
              <span className="text-gray-400 mx-4">Or</span>
              <span className="border-b border-gray-600 w-full"></span>
            </div>
            <div className="flex mt-4 space-x-2">
              <button
                type="button"
                className="w-full flex justify-center items-center bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600"
                onClick={googleAuthentication}
              >
                <FaGoogle className="mr-2" /> Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600"
              >
                <FaGithub className="mr-2" /> Github
              </button>
            </div>
          </div>
    </div>
    </div>
  )
}

export default AdminLogin