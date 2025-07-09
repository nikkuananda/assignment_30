import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Cit Cat</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-yellow-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
