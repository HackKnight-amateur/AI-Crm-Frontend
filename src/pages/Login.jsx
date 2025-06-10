import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center items-center gap-2 mb-6 text-blue-600 text-2xl font-bold">
          <span>🤖</span>
          <span>AI-CRM</span>
        </div>

        <h2 className="text-xl font-bold text-center text-gray-800">Welcome back</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to your account to continue managing your business
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Sign in to your account
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">────────── or ──────────</div>

        <div className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Create new account</a>
        </div>

        <div className="mt-4 text-center">
          <a href="/" className="text-blue-600 hover:underline text-sm">← Back to homepage</a>
        </div>
      </div>
    </div>
  );
}

export default Login;

