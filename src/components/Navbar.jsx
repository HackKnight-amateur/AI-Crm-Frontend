import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <span className="text-lg font-semibold">AI CRM</span>
      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
