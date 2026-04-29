import { FaGoogle } from 'react-icons/fa';

async function googleAuthentication() {
  const baseURL = import.meta.env.VITE_BACKEND_URL || "http://34.195.121.125:8080"
  window.location.href = `${baseURL}/auth/google`;
}

const AdminLogin = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-900 text-zinc-200">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-sm flex flex-col items-center gap-6">
        <h2 className="text-white text-3xl font-bold">Admin Login</h2>
        <p className="text-gray-400 text-center">Sign in with your Google account to access the admin dashboard.</p>
        <button
          type="button"
          className="w-full flex justify-center items-center gap-2 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition"
          onClick={googleAuthentication}
        >
          <FaGoogle /> Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default AdminLogin
