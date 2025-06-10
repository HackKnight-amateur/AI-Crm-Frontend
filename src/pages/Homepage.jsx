import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <span>🤖</span>
          <span>AI-CRM</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-6 py-20 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Smart CRM for <span className="text-blue-600">Modern Shopkeepers</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Revolutionize your business with AI-powered customer relationship management.
          Track inventory, manage customers, and boost sales with intelligent insights.
        </p>
        <div className="mt-6 flex gap-4">
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
            Get Started
          </Link>
          <Link to="/login" className="border border-gray-300 px-6 py-2 rounded font-medium hover:border-gray-500">
            Sign In
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <div className="flex justify-center gap-2 text-xl mb-2">
          <span>🤖</span>
          <span className="font-bold">AI-CRM</span>
        </div>
        <p className="text-sm text-gray-400">Empowering shopkeepers with intelligent CRM solutions.</p>
        <div className="mt-2 space-x-4 text-sm">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
